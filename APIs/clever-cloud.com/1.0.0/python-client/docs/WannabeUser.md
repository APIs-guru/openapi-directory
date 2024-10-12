# WannabeUser



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** |  | [optional] 
**city** | **str** |  | [optional] 
**country** | **str** |  | [optional] 
**email** | **str** |  | 
**lang** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**password** | **str** |  | 
**phone** | **str** |  | [optional] 
**terms** | **bool** |  | [default to False]
**zipcode** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.wannabe_user import WannabeUser

# TODO update the JSON string below
json = "{}"
# create an instance of WannabeUser from a JSON string
wannabe_user_instance = WannabeUser.from_json(json)
# print the JSON string representation of the object
print(WannabeUser.to_json())

# convert the object into a dict
wannabe_user_dict = wannabe_user_instance.to_dict()
# create an instance of WannabeUser from a dict
wannabe_user_from_dict = WannabeUser.from_dict(wannabe_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


