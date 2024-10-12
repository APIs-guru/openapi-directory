# RosettaNetPipActivityBehavior

The integration account RosettaNet ProcessConfiguration activity behavior.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_type** | [**RosettaNetActionType**](RosettaNetActionType.md) |  | 
**is_authorization_required** | **bool** | The value indicating whether authorization is required. | 
**is_secured_transport_required** | **bool** | The value indicating whether secured transport is required. | 
**non_repudiation_of_origin_and_content** | **bool** | The value indicating whether non-repudiation is for origin and content. | 
**persistent_confidentiality_scope** | [**RosettaNetPipConfidentialityScope**](RosettaNetPipConfidentialityScope.md) |  | 
**response_type** | [**RosettaNetResponseType**](RosettaNetResponseType.md) |  | 
**retry_count** | **int** | The value indicating retry count. | 
**time_to_perform_in_seconds** | **int** | The time to perform in seconds. | 

## Example

```python
from openapi_client.models.rosetta_net_pip_activity_behavior import RosettaNetPipActivityBehavior

# TODO update the JSON string below
json = "{}"
# create an instance of RosettaNetPipActivityBehavior from a JSON string
rosetta_net_pip_activity_behavior_instance = RosettaNetPipActivityBehavior.from_json(json)
# print the JSON string representation of the object
print(RosettaNetPipActivityBehavior.to_json())

# convert the object into a dict
rosetta_net_pip_activity_behavior_dict = rosetta_net_pip_activity_behavior_instance.to_dict()
# create an instance of RosettaNetPipActivityBehavior from a dict
rosetta_net_pip_activity_behavior_from_dict = RosettaNetPipActivityBehavior.from_dict(rosetta_net_pip_activity_behavior_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


