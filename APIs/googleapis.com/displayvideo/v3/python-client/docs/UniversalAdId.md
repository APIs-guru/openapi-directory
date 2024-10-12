# UniversalAdId

A creative identifier provided by a registry that is unique across all platforms. This is part of the VAST 4.0 standard.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique creative identifier. | [optional] 
**registry** | **str** | The registry provides unique creative identifiers. | [optional] 

## Example

```python
from openapi_client.models.universal_ad_id import UniversalAdId

# TODO update the JSON string below
json = "{}"
# create an instance of UniversalAdId from a JSON string
universal_ad_id_instance = UniversalAdId.from_json(json)
# print the JSON string representation of the object
print(UniversalAdId.to_json())

# convert the object into a dict
universal_ad_id_dict = universal_ad_id_instance.to_dict()
# create an instance of UniversalAdId from a dict
universal_ad_id_from_dict = UniversalAdId.from_dict(universal_ad_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


