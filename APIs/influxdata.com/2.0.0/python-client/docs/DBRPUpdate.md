# DBRPUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database** | **str** | InfluxDB v1 database | [optional] 
**default** | **bool** |  | [optional] 
**links** | [**Links**](Links.md) |  | [optional] 
**retention_policy** | **str** | InfluxDB v1 retention policy | [optional] 

## Example

```python
from openapi_client.models.dbrp_update import DBRPUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of DBRPUpdate from a JSON string
dbrp_update_instance = DBRPUpdate.from_json(json)
# print the JSON string representation of the object
print(DBRPUpdate.to_json())

# convert the object into a dict
dbrp_update_dict = dbrp_update_instance.to_dict()
# create an instance of DBRPUpdate from a dict
dbrp_update_from_dict = DBRPUpdate.from_dict(dbrp_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


