# Publisher

Publisher contains information about the publisher of this Note.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issuing_authority** | **str** | Provides information about the authority of the issuing party to release the document, in particular, the party&#39;s constituency and responsibilities or other obligations. | [optional] 
**name** | **str** | Name of the publisher. Examples: &#39;Google&#39;, &#39;Google Cloud Platform&#39;. | [optional] 
**publisher_namespace** | **str** | The context or namespace. Contains a URL which is under control of the issuing party and can be used as a globally unique identifier for that issuing party. Example: https://csaf.io | [optional] 

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


