# ChapProperties

Chap properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | [**AsymmetricEncryptedSecret**](AsymmetricEncryptedSecret.md) |  | 

## Example

```python
from openapi_client.models.chap_properties import ChapProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ChapProperties from a JSON string
chap_properties_instance = ChapProperties.from_json(json)
# print the JSON string representation of the object
print(ChapProperties.to_json())

# convert the object into a dict
chap_properties_dict = chap_properties_instance.to_dict()
# create an instance of ChapProperties from a dict
chap_properties_from_dict = ChapProperties.from_dict(chap_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


