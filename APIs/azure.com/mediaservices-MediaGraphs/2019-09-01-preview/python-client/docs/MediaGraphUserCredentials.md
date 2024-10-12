# MediaGraphUserCredentials

Credentials to authenticate to Media Graph sources

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** | Password credential | 
**username** | **str** | User name | 

## Example

```python
from openapi_client.models.media_graph_user_credentials import MediaGraphUserCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of MediaGraphUserCredentials from a JSON string
media_graph_user_credentials_instance = MediaGraphUserCredentials.from_json(json)
# print the JSON string representation of the object
print(MediaGraphUserCredentials.to_json())

# convert the object into a dict
media_graph_user_credentials_dict = media_graph_user_credentials_instance.to_dict()
# create an instance of MediaGraphUserCredentials from a dict
media_graph_user_credentials_from_dict = MediaGraphUserCredentials.from_dict(media_graph_user_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


