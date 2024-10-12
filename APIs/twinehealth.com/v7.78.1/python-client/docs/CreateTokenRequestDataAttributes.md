# CreateTokenRequestDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Contact Fitbit Plus API Support to get a client id and secret. | 
**client_secret** | **str** | Contact Fitbit Plus API Support to get a client id and secret. Secret is required if grant_type is \&quot;client_credentials\&quot; | [optional] 
**grant_type** | **str** |  | 
**refresh_token** | **str** | Required if grant_type is \&quot;refresh_token\&quot; | [optional] 

## Example

```python
from openapi_client.models.create_token_request_data_attributes import CreateTokenRequestDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreateTokenRequestDataAttributes from a JSON string
create_token_request_data_attributes_instance = CreateTokenRequestDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CreateTokenRequestDataAttributes.to_json())

# convert the object into a dict
create_token_request_data_attributes_dict = create_token_request_data_attributes_instance.to_dict()
# create an instance of CreateTokenRequestDataAttributes from a dict
create_token_request_data_attributes_from_dict = CreateTokenRequestDataAttributes.from_dict(create_token_request_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


