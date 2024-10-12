# CustomBiddingScriptRef

The reference to the uploaded custom bidding script file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_name** | **str** | A resource name to be used in media.download to Download the script files. Or media.upload to Upload the script files. Resource names have the format &#x60;customBiddingAlgorithms/{custom_bidding_algorithm_id}/scriptRef/{ref_id}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.custom_bidding_script_ref import CustomBiddingScriptRef

# TODO update the JSON string below
json = "{}"
# create an instance of CustomBiddingScriptRef from a JSON string
custom_bidding_script_ref_instance = CustomBiddingScriptRef.from_json(json)
# print the JSON string representation of the object
print(CustomBiddingScriptRef.to_json())

# convert the object into a dict
custom_bidding_script_ref_dict = custom_bidding_script_ref_instance.to_dict()
# create an instance of CustomBiddingScriptRef from a dict
custom_bidding_script_ref_from_dict = CustomBiddingScriptRef.from_dict(custom_bidding_script_ref_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


