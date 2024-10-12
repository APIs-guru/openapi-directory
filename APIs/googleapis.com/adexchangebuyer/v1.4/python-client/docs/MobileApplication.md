# MobileApplication


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_store** | **str** |  | [optional] 
**external_app_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.mobile_application import MobileApplication

# TODO update the JSON string below
json = "{}"
# create an instance of MobileApplication from a JSON string
mobile_application_instance = MobileApplication.from_json(json)
# print the JSON string representation of the object
print(MobileApplication.to_json())

# convert the object into a dict
mobile_application_dict = mobile_application_instance.to_dict()
# create an instance of MobileApplication from a dict
mobile_application_from_dict = MobileApplication.from_dict(mobile_application_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


