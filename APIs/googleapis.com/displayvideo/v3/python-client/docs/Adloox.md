# Adloox

Details of Adloox settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**excluded_adloox_categories** | **List[str]** | Adloox&#39;s brand safety settings. | [optional] 

## Example

```python
from openapi_client.models.adloox import Adloox

# TODO update the JSON string below
json = "{}"
# create an instance of Adloox from a JSON string
adloox_instance = Adloox.from_json(json)
# print the JSON string representation of the object
print(Adloox.to_json())

# convert the object into a dict
adloox_dict = adloox_instance.to_dict()
# create an instance of Adloox from a dict
adloox_from_dict = Adloox.from_dict(adloox_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


