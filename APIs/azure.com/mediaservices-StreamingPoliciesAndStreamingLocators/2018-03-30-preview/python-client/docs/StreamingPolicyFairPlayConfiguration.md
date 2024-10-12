# StreamingPolicyFairPlayConfiguration

Class to specify configurations of FairPlay in Streaming Policy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_persistent_license** | **bool** | All license to be persistent or not | 
**custom_license_acquisition_url_template** | **str** | The template for a customer service to deliver keys to end users.  Not needed when using Azure Media Services for issuing keys. | [optional] 

## Example

```python
from openapi_client.models.streaming_policy_fair_play_configuration import StreamingPolicyFairPlayConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of StreamingPolicyFairPlayConfiguration from a JSON string
streaming_policy_fair_play_configuration_instance = StreamingPolicyFairPlayConfiguration.from_json(json)
# print the JSON string representation of the object
print(StreamingPolicyFairPlayConfiguration.to_json())

# convert the object into a dict
streaming_policy_fair_play_configuration_dict = streaming_policy_fair_play_configuration_instance.to_dict()
# create an instance of StreamingPolicyFairPlayConfiguration from a dict
streaming_policy_fair_play_configuration_from_dict = StreamingPolicyFairPlayConfiguration.from_dict(streaming_policy_fair_play_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


