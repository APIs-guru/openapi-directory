# IntuneAppCategory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | display name for the app category | [optional] 

## Example

```python
from openapi_client.models.intune_app_category import IntuneAppCategory

# TODO update the JSON string below
json = "{}"
# create an instance of IntuneAppCategory from a JSON string
intune_app_category_instance = IntuneAppCategory.from_json(json)
# print the JSON string representation of the object
print(IntuneAppCategory.to_json())

# convert the object into a dict
intune_app_category_dict = intune_app_category_instance.to_dict()
# create an instance of IntuneAppCategory from a dict
intune_app_category_from_dict = IntuneAppCategory.from_dict(intune_app_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


