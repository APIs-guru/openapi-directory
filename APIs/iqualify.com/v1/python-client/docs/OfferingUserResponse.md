# OfferingUserResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avatar_url** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**evaluated_by** | **List[str]** |  | [optional] 
**evaluates** | **List[str]** |  | [optional] 
**first_name** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**is_facilitator** | **bool** |  | [optional] [default to False]
**is_marker** | **bool** |  | [optional] [default to False]
**is_readonly** | **bool** |  | [optional] [default to False]
**last_name** | **str** |  | [optional] 
**marked_by** | **List[str]** |  | [optional] 
**marks** | **List[str]** |  | [optional] 
**person_id** | **str** |  | [optional] 
**profile** | [**UserProfile**](UserProfile.md) |  | [optional] 

## Example

```python
from openapi_client.models.offering_user_response import OfferingUserResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OfferingUserResponse from a JSON string
offering_user_response_instance = OfferingUserResponse.from_json(json)
# print the JSON string representation of the object
print(OfferingUserResponse.to_json())

# convert the object into a dict
offering_user_response_dict = offering_user_response_instance.to_dict()
# create an instance of OfferingUserResponse from a dict
offering_user_response_from_dict = OfferingUserResponse.from_dict(offering_user_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


