# ConsumerMetadata

The metadata of the consumer. This is used to display the consumer in the sidebar. This is optional, but recommended.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_name** | **str** | The name of the account as shown in the sidebar. | [optional] 
**email** | **str** | The email of the user as shown in the sidebar. | [optional] 
**image** | **str** | The avatar of the user in the sidebar. Must be a valid URL | [optional] 
**user_name** | **str** | The name of the user as shown in the sidebar. | [optional] 

## Example

```python
from openapi_client.models.consumer_metadata import ConsumerMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ConsumerMetadata from a JSON string
consumer_metadata_instance = ConsumerMetadata.from_json(json)
# print the JSON string representation of the object
print(ConsumerMetadata.to_json())

# convert the object into a dict
consumer_metadata_dict = consumer_metadata_instance.to_dict()
# create an instance of ConsumerMetadata from a dict
consumer_metadata_from_dict = ConsumerMetadata.from_dict(consumer_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


