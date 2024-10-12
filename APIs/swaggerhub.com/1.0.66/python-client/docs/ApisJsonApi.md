# ApisJsonApi


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**properties** | [**List[ApisJsonProperty]**](ApisJsonProperty.md) |  | [optional] 
**tags** | **List[str]** | Reserved for future use | [optional] 

## Example

```python
from openapi_client.models.apis_json_api import ApisJsonApi

# TODO update the JSON string below
json = "{}"
# create an instance of ApisJsonApi from a JSON string
apis_json_api_instance = ApisJsonApi.from_json(json)
# print the JSON string representation of the object
print(ApisJsonApi.to_json())

# convert the object into a dict
apis_json_api_dict = apis_json_api_instance.to_dict()
# create an instance of ApisJsonApi from a dict
apis_json_api_from_dict = ApisJsonApi.from_dict(apis_json_api_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


