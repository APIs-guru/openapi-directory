# ExternalAccessInfo

Resource provider deployment information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiration_time** | **datetime** | The deployment start time | [optional] 
**principal_id** | **str** | The object identifier of the user, group or service principal that have access to resource provider subscription. | [optional] 

## Example

```python
from openapi_client.models.external_access_info import ExternalAccessInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ExternalAccessInfo from a JSON string
external_access_info_instance = ExternalAccessInfo.from_json(json)
# print the JSON string representation of the object
print(ExternalAccessInfo.to_json())

# convert the object into a dict
external_access_info_dict = external_access_info_instance.to_dict()
# create an instance of ExternalAccessInfo from a dict
external_access_info_from_dict = ExternalAccessInfo.from_dict(external_access_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


