# NiResponseJsonBasic


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_code** | **str** | Two character country code for &#x60;number&#x60;. This is in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. | [optional] 
**country_code_iso3** | **str** | Three character country code for &#x60;number&#x60;. This is in [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) format. | [optional] 
**country_name** | **str** | The full name of the country that &#x60;number&#x60; is registered in. | [optional] 
**country_prefix** | **str** | The numeric prefix for the country that &#x60;number&#x60; is registered in. | [optional] 
**international_format_number** | **str** | The &#x60;number&#x60; in your request in international format. | [optional] 
**national_format_number** | **str** | The &#x60;number&#x60; in your request in the format used by the country the number belongs to. | [optional] 
**request_id** | **str** | The unique identifier for your request. This is a alphanumeric string up to 40 characters. | [optional] 
**status** | [**NiBasicStatus**](NiBasicStatus.md) |  | [optional] 
**status_message** | **str** | The status description of your request. | [optional] 

## Example

```python
from openapi_client.models.ni_response_json_basic import NiResponseJsonBasic

# TODO update the JSON string below
json = "{}"
# create an instance of NiResponseJsonBasic from a JSON string
ni_response_json_basic_instance = NiResponseJsonBasic.from_json(json)
# print the JSON string representation of the object
print(NiResponseJsonBasic.to_json())

# convert the object into a dict
ni_response_json_basic_dict = ni_response_json_basic_instance.to_dict()
# create an instance of NiResponseJsonBasic from a dict
ni_response_json_basic_from_dict = NiResponseJsonBasic.from_dict(ni_response_json_basic_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


