# UserLocation

JSON template for a location entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**area** | **str** | Textual location. This is most useful for display purposes to concisely describe the location. For example &#39;Mountain View, CA&#39;, &#39;Near Seattle&#39;, &#39;US-NYC-9TH 9A209A.&#39;&#39; | [optional] 
**building_id** | **str** | Building Identifier. | [optional] 
**custom_type** | **str** | Custom Type. | [optional] 
**desk_code** | **str** | Most specific textual code of individual desk location. | [optional] 
**floor_name** | **str** | Floor name/number. | [optional] 
**floor_section** | **str** | Floor section. More specific location within the floor. For example if a floor is divided into sections &#39;A&#39;, &#39;B&#39; and &#39;C&#39; this field would identify one of those values. | [optional] 
**type** | **str** | Each entry can have a type which indicates standard types of that entry. For example location could be of types default and desk. In addition to standard type an entry can have a custom type and can give it any name. Such types should have &#39;custom&#39; as type and also have a customType value. | [optional] 

## Example

```python
from openapi_client.models.user_location import UserLocation

# TODO update the JSON string below
json = "{}"
# create an instance of UserLocation from a JSON string
user_location_instance = UserLocation.from_json(json)
# print the JSON string representation of the object
print(UserLocation.to_json())

# convert the object into a dict
user_location_dict = user_location_instance.to_dict()
# create an instance of UserLocation from a dict
user_location_from_dict = UserLocation.from_dict(user_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


