# GetFollowers200ResponseInner

A follower

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**name** | **str** | The follower&#39;s name | [optional] 
**path** | **str** | A path to the follower&#39;s profile | [optional] 
**profile_image** | **str** | Profile image (640x640) | [optional] 
**type_of** | **str** | user_follower by default | [optional] 
**user_id** | **int** | The follower&#39;s user id | [optional] 

## Example

```python
from openapi_client.models.get_followers200_response_inner import GetFollowers200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetFollowers200ResponseInner from a JSON string
get_followers200_response_inner_instance = GetFollowers200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetFollowers200ResponseInner.to_json())

# convert the object into a dict
get_followers200_response_inner_dict = get_followers200_response_inner_instance.to_dict()
# create an instance of GetFollowers200ResponseInner from a dict
get_followers200_response_inner_from_dict = GetFollowers200ResponseInner.from_dict(get_followers200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


