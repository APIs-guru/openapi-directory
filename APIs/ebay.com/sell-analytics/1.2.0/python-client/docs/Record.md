# Record

Type that defines the fields of the individual record of the report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension_values** | [**List[Value]**](Value.md) | A list where each element contains either the string DAY (if the dimension is DAY), or the listing ID for which the record&#39;s metric data is computed. A second array member, applicable, is always true for dimension values. | [optional] 
**metric_values** | [**List[Value]**](Value.md) | A list where each element contains a value field that indicates the record&#39;s value for the metric. Each element also contains an applicable field that indicates the veracity of the computed value. Note that there are no metric names or IDs associated with the values returned in this array. The metadata to which these values relate can be found in the key values . The order of the metric values in this array equals the order of the key values in metadataHeader. | [optional] 

## Example

```python
from openapi_client.models.record import Record

# TODO update the JSON string below
json = "{}"
# create an instance of Record from a JSON string
record_instance = Record.from_json(json)
# print the JSON string representation of the object
print(Record.to_json())

# convert the object into a dict
record_dict = record_instance.to_dict()
# create an instance of Record from a dict
record_from_dict = Record.from_dict(record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


