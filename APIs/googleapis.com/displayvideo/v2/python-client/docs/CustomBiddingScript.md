# CustomBiddingScript

A single custom bidding script.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | Output only. Whether the script is currently being used for scoring by the parent algorithm. | [optional] [readonly] 
**create_time** | **str** | Output only. The time when the script was created. | [optional] [readonly] 
**custom_bidding_algorithm_id** | **str** | Output only. The unique ID of the custom bidding algorithm the script belongs to. | [optional] [readonly] 
**custom_bidding_script_id** | **str** | Output only. The unique ID of the custom bidding script. | [optional] [readonly] 
**errors** | [**List[ScriptError]**](ScriptError.md) | Output only. Error details of a rejected custom bidding script. This field will only be populated when state is REJECTED. | [optional] [readonly] 
**name** | **str** | Output only. The resource name of the custom bidding script. | [optional] [readonly] 
**script** | [**CustomBiddingScriptRef**](CustomBiddingScriptRef.md) |  | [optional] 
**state** | **str** | Output only. The state of the custom bidding script. | [optional] [readonly] 

## Example

```python
from openapi_client.models.custom_bidding_script import CustomBiddingScript

# TODO update the JSON string below
json = "{}"
# create an instance of CustomBiddingScript from a JSON string
custom_bidding_script_instance = CustomBiddingScript.from_json(json)
# print the JSON string representation of the object
print(CustomBiddingScript.to_json())

# convert the object into a dict
custom_bidding_script_dict = custom_bidding_script_instance.to_dict()
# create an instance of CustomBiddingScript from a dict
custom_bidding_script_from_dict = CustomBiddingScript.from_dict(custom_bidding_script_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


