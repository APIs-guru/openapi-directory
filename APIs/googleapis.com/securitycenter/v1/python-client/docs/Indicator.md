# Indicator

Represents what's commonly known as an _indicator of compromise_ (IoC) in computer forensics. This is an artifact observed on a network or in an operating system that, with high confidence, indicates a computer intrusion. For more information, see [Indicator of compromise](https://en.wikipedia.org/wiki/Indicator_of_compromise).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domains** | **List[str]** | List of domains associated to the Finding. | [optional] 
**ip_addresses** | **List[str]** | The list of IP addresses that are associated with the finding. | [optional] 
**signatures** | [**List[ProcessSignature]**](ProcessSignature.md) | The list of matched signatures indicating that the given process is present in the environment. | [optional] 
**uris** | **List[str]** | The list of URIs associated to the Findings. | [optional] 

## Example

```python
from openapi_client.models.indicator import Indicator

# TODO update the JSON string below
json = "{}"
# create an instance of Indicator from a JSON string
indicator_instance = Indicator.from_json(json)
# print the JSON string representation of the object
print(Indicator.to_json())

# convert the object into a dict
indicator_dict = indicator_instance.to_dict()
# create an instance of Indicator from a dict
indicator_from_dict = Indicator.from_dict(indicator_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


