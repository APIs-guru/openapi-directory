# Function

Describes a Cloud Function that contains user computation executed in response to an event. It encapsulates function and trigger configurations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_config** | [**BuildConfig**](BuildConfig.md) |  | [optional] 
**create_time** | **str** | Output only. The create timestamp of a Cloud Function. This is only applicable to 2nd Gen functions. | [optional] [readonly] 
**description** | **str** | User-provided description of a function. | [optional] 
**environment** | **str** | Describe whether the function is 1st Gen or 2nd Gen. | [optional] 
**event_trigger** | [**EventTrigger**](EventTrigger.md) |  | [optional] 
**kms_key_name** | **str** | [Preview] Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources. It must match the pattern &#x60;projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}&#x60;. | [optional] 
**labels** | **Dict[str, str]** | Labels associated with this Cloud Function. | [optional] 
**name** | **str** | A user-defined name of the function. Function names must be unique globally and match pattern &#x60;projects/*/locations/*/functions/*&#x60; | [optional] 
**satisfies_pzs** | **bool** | Output only. Reserved for future use. | [optional] [readonly] 
**service_config** | [**ServiceConfig**](ServiceConfig.md) |  | [optional] 
**state** | **str** | Output only. State of the function. | [optional] [readonly] 
**state_messages** | [**List[GoogleCloudFunctionsV2StateMessage]**](GoogleCloudFunctionsV2StateMessage.md) | Output only. State Messages for this Cloud Function. | [optional] [readonly] 
**update_time** | **str** | Output only. The last update timestamp of a Cloud Function. | [optional] [readonly] 
**upgrade_info** | [**UpgradeInfo**](UpgradeInfo.md) |  | [optional] 
**url** | **str** | Output only. The deployed url for the function. | [optional] [readonly] 

## Example

```python
from openapi_client.models.function import Function

# TODO update the JSON string below
json = "{}"
# create an instance of Function from a JSON string
function_instance = Function.from_json(json)
# print the JSON string representation of the object
print(Function.to_json())

# convert the object into a dict
function_dict = function_instance.to_dict()
# create an instance of Function from a dict
function_from_dict = Function.from_dict(function_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


