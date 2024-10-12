# CreateAdGroupRequest

A type that defines the fields for the <b>CreateAdGroup</b> request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_bid** | [**Amount**](Amount.md) |  | [optional] 
**name** | **str** | The seller-defined name of the ad group. | [optional] 

## Example

```python
from openapi_client.models.create_ad_group_request import CreateAdGroupRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateAdGroupRequest from a JSON string
create_ad_group_request_instance = CreateAdGroupRequest.from_json(json)
# print the JSON string representation of the object
print(CreateAdGroupRequest.to_json())

# convert the object into a dict
create_ad_group_request_dict = create_ad_group_request_instance.to_dict()
# create an instance of CreateAdGroupRequest from a dict
create_ad_group_request_from_dict = CreateAdGroupRequest.from_dict(create_ad_group_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


