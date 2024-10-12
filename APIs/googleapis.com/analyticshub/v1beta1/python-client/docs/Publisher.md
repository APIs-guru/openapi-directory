# Publisher

Contains details of the listing publisher.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Optional. Name of the listing publisher. | [optional] 
**primary_contact** | **str** | Optional. Email or URL of the listing publisher. Max Length: 1000 bytes. | [optional] 

## Example

```python
from openapi_client.models.publisher import Publisher

# TODO update the JSON string below
json = "{}"
# create an instance of Publisher from a JSON string
publisher_instance = Publisher.from_json(json)
# print the JSON string representation of the object
print(Publisher.to_json())

# convert the object into a dict
publisher_dict = publisher_instance.to_dict()
# create an instance of Publisher from a dict
publisher_from_dict = Publisher.from_dict(publisher_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


