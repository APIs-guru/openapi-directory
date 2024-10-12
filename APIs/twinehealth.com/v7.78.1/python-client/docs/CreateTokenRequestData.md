# CreateTokenRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**CreateTokenRequestDataAttributes**](CreateTokenRequestDataAttributes.md) |  | 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.create_token_request_data import CreateTokenRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateTokenRequestData from a JSON string
create_token_request_data_instance = CreateTokenRequestData.from_json(json)
# print the JSON string representation of the object
print(CreateTokenRequestData.to_json())

# convert the object into a dict
create_token_request_data_dict = create_token_request_data_instance.to_dict()
# create an instance of CreateTokenRequestData from a dict
create_token_request_data_from_dict = CreateTokenRequestData.from_dict(create_token_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


