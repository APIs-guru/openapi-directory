# TroubleshootingDetails

Information gained from troubleshooting of specified resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | Details on troubleshooting results. | [optional] 
**id** | **str** | The id of the get troubleshoot operation. | [optional] 
**reason_type** | **str** | Reason type of failure. | [optional] 
**recommended_actions** | [**List[TroubleshootingRecommendedActions]**](TroubleshootingRecommendedActions.md) | List of recommended actions. | [optional] 
**summary** | **str** | A summary of troubleshooting. | [optional] 

## Example

```python
from openapi_client.models.troubleshooting_details import TroubleshootingDetails

# TODO update the JSON string below
json = "{}"
# create an instance of TroubleshootingDetails from a JSON string
troubleshooting_details_instance = TroubleshootingDetails.from_json(json)
# print the JSON string representation of the object
print(TroubleshootingDetails.to_json())

# convert the object into a dict
troubleshooting_details_dict = troubleshooting_details_instance.to_dict()
# create an instance of TroubleshootingDetails from a dict
troubleshooting_details_from_dict = TroubleshootingDetails.from_dict(troubleshooting_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


