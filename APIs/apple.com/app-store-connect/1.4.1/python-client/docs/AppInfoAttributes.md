# AppInfoAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_store_age_rating** | [**AppStoreAgeRating**](AppStoreAgeRating.md) |  | [optional] 
**app_store_state** | [**AppStoreVersionState**](AppStoreVersionState.md) |  | [optional] 
**brazil_age_rating** | [**BrazilAgeRating**](BrazilAgeRating.md) |  | [optional] 
**kids_age_band** | [**KidsAgeBand**](KidsAgeBand.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_info_attributes import AppInfoAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of AppInfoAttributes from a JSON string
app_info_attributes_instance = AppInfoAttributes.from_json(json)
# print the JSON string representation of the object
print(AppInfoAttributes.to_json())

# convert the object into a dict
app_info_attributes_dict = app_info_attributes_instance.to_dict()
# create an instance of AppInfoAttributes from a dict
app_info_attributes_from_dict = AppInfoAttributes.from_dict(app_info_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


