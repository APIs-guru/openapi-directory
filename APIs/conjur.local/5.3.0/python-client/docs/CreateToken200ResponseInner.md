# CreateToken200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cidr** | **List[str]** |  | 
**expiration** | **str** |  | 
**token** | **str** |  | 

## Example

```python
from openapi_client.models.create_token200_response_inner import CreateToken200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreateToken200ResponseInner from a JSON string
create_token200_response_inner_instance = CreateToken200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(CreateToken200ResponseInner.to_json())

# convert the object into a dict
create_token200_response_inner_dict = create_token200_response_inner_instance.to_dict()
# create an instance of CreateToken200ResponseInner from a dict
create_token200_response_inner_from_dict = CreateToken200ResponseInner.from_dict(create_token200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


