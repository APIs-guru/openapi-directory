# ChangeFeed

The blob service properties for change feed events.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Indicates whether change feed event logging is enabled for the Blob service. | [optional] 

## Example

```python
from openapi_client.models.change_feed import ChangeFeed

# TODO update the JSON string below
json = "{}"
# create an instance of ChangeFeed from a JSON string
change_feed_instance = ChangeFeed.from_json(json)
# print the JSON string representation of the object
print(ChangeFeed.to_json())

# convert the object into a dict
change_feed_dict = change_feed_instance.to_dict()
# create an instance of ChangeFeed from a dict
change_feed_from_dict = ChangeFeed.from_dict(change_feed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


