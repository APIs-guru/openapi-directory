# NiRoaming

Information about the roaming status for `number`. This is applicable to mobile numbers only. If unknown, this may return a string of `unknown` instead of an object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**roaming_country_code** | **str** | If &#x60;number&#x60; is &#x60;roaming&#x60;, this is the [code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the country &#x60;number&#x60; is roaming in. | [optional] 
**roaming_network_code** | **str** | If &#x60;number&#x60; is &#x60;roaming&#x60;, this is the id of the carrier network &#x60;number&#x60; is roaming in. | [optional] 
**roaming_network_name** | **str** | If &#x60;number&#x60; is &#x60;roaming&#x60;, this is the name of the carrier network &#x60;number&#x60; is roaming in. | [optional] 
**status** | **str** | Is &#x60;number&#x60; outside its home carrier network. | [optional] 

## Example

```python
from openapi_client.models.ni_roaming import NiRoaming

# TODO update the JSON string below
json = "{}"
# create an instance of NiRoaming from a JSON string
ni_roaming_instance = NiRoaming.from_json(json)
# print the JSON string representation of the object
print(NiRoaming.to_json())

# convert the object into a dict
ni_roaming_dict = ni_roaming_instance.to_dict()
# create an instance of NiRoaming from a dict
ni_roaming_from_dict = NiRoaming.from_dict(ni_roaming_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


