# ConsentLinkInput

Connection Consent Link payload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** |  | [optional] 
**id** | **str** | Resource Id | [optional] 
**kind** | **str** | Kind of resource | [optional] 
**location** | **str** | Resource Location | 
**name** | **str** | Resource Name | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] 

## Example

```python
from openapi_client.models.consent_link_input import ConsentLinkInput

# TODO update the JSON string below
json = "{}"
# create an instance of ConsentLinkInput from a JSON string
consent_link_input_instance = ConsentLinkInput.from_json(json)
# print the JSON string representation of the object
print(ConsentLinkInput.to_json())

# convert the object into a dict
consent_link_input_dict = consent_link_input_instance.to_dict()
# create an instance of ConsentLinkInput from a dict
consent_link_input_from_dict = ConsentLinkInput.from_dict(consent_link_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


