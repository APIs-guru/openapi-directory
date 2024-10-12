# InfluxQLQuery

Query influx using the InfluxQL language

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket** | **str** | Bucket is to be used instead of the database and retention policy specified in the InfluxQL query. | [optional] 
**query** | **str** | InfluxQL query execute. | 
**type** | **str** | The type of query. Must be \&quot;influxql\&quot;. | [optional] 

## Example

```python
from openapi_client.models.influx_ql_query import InfluxQLQuery

# TODO update the JSON string below
json = "{}"
# create an instance of InfluxQLQuery from a JSON string
influx_ql_query_instance = InfluxQLQuery.from_json(json)
# print the JSON string representation of the object
print(InfluxQLQuery.to_json())

# convert the object into a dict
influx_ql_query_dict = influx_ql_query_instance.to_dict()
# create an instance of InfluxQLQuery from a dict
influx_ql_query_from_dict = InfluxQLQuery.from_dict(influx_ql_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


