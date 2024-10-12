# ActorInputBean


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group** | **List[str]** | The name of the group to add as a default actor. This parameter cannot be used with the &#x60;groupId&#x60; parameter. As a group&#39;s name can change,use of &#x60;groupId&#x60; is recommended. This parameter accepts a comma-separated list. For example, &#x60;\&quot;group\&quot;:[\&quot;project-admin\&quot;, \&quot;jira-developers\&quot;]&#x60;. | [optional] 
**group_id** | **List[str]** | The ID of the group to add as a default actor. This parameter cannot be used with the &#x60;group&#x60; parameter This parameter accepts a comma-separated list. For example, &#x60;\&quot;groupId\&quot;:[\&quot;77f6ab39-e755-4570-a6ae-2d7a8df0bcb8\&quot;, \&quot;0c011f85-69ed-49c4-a801-3b18d0f771bc\&quot;]&#x60;. | [optional] 
**user** | **List[str]** | The account IDs of the users to add as default actors. This parameter accepts a comma-separated list. For example, &#x60;\&quot;user\&quot;:[\&quot;5b10a2844c20165700ede21g\&quot;, \&quot;5b109f2e9729b51b54dc274d\&quot;]&#x60;. | [optional] 

## Example

```python
from openapi_client.models.actor_input_bean import ActorInputBean

# TODO update the JSON string below
json = "{}"
# create an instance of ActorInputBean from a JSON string
actor_input_bean_instance = ActorInputBean.from_json(json)
# print the JSON string representation of the object
print(ActorInputBean.to_json())

# convert the object into a dict
actor_input_bean_dict = actor_input_bean_instance.to_dict()
# create an instance of ActorInputBean from a dict
actor_input_bean_from_dict = ActorInputBean.from_dict(actor_input_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


