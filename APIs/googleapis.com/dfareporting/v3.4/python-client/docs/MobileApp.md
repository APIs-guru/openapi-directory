# MobileApp

Contains information about a mobile app. Used as a landing page deep link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**directory** | **str** | Mobile app directory. | [optional] 
**id** | **str** | ID of this mobile app. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#mobileApp\&quot;. | [optional] 
**publisher_name** | **str** | Publisher name. | [optional] 
**title** | **str** | Title of this mobile app. | [optional] 

## Example

```python
from openapi_client.models.mobile_app import MobileApp

# TODO update the JSON string below
json = "{}"
# create an instance of MobileApp from a JSON string
mobile_app_instance = MobileApp.from_json(json)
# print the JSON string representation of the object
print(MobileApp.to_json())

# convert the object into a dict
mobile_app_dict = mobile_app_instance.to_dict()
# create an instance of MobileApp from a dict
mobile_app_from_dict = MobileApp.from_dict(mobile_app_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


