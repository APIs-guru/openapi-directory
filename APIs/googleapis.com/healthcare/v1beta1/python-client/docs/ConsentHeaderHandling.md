# ConsentHeaderHandling

How the server handles the consent header.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**profile** | **str** | Optional. Specifies the default server behavior when the header is empty. If not specified, the &#x60;ScopeProfile.PERMIT_EMPTY_SCOPE&#x60; option is used. | [optional] 

## Example

```python
from openapi_client.models.consent_header_handling import ConsentHeaderHandling

# TODO update the JSON string below
json = "{}"
# create an instance of ConsentHeaderHandling from a JSON string
consent_header_handling_instance = ConsentHeaderHandling.from_json(json)
# print the JSON string representation of the object
print(ConsentHeaderHandling.to_json())

# convert the object into a dict
consent_header_handling_dict = consent_header_handling_instance.to_dict()
# create an instance of ConsentHeaderHandling from a dict
consent_header_handling_from_dict = ConsentHeaderHandling.from_dict(consent_header_handling_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


