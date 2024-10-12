# GcrDestination

The GCR location where the image must be pushed to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output_uri** | **str** | Required. Google Contained Registry URI of the new image, up to 2000 characters long. See https: //cloud.google.com/container-registry/do // cs/pushing-and-pulling#pushing_an_image_to_a_registry Accepted forms: * [HOSTNAME]/[PROJECT-ID]/[IMAGE] * [HOSTNAME]/[PROJECT-ID]/[IMAGE]:[TAG] The requesting user must have permission to push images the project. | [optional] 

## Example

```python
from openapi_client.models.gcr_destination import GcrDestination

# TODO update the JSON string below
json = "{}"
# create an instance of GcrDestination from a JSON string
gcr_destination_instance = GcrDestination.from_json(json)
# print the JSON string representation of the object
print(GcrDestination.to_json())

# convert the object into a dict
gcr_destination_dict = gcr_destination_instance.to_dict()
# create an instance of GcrDestination from a dict
gcr_destination_from_dict = GcrDestination.from_dict(gcr_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


