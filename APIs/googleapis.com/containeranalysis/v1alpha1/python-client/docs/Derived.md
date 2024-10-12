# Derived

Derived describes the derived image portion (Occurrence) of the DockerImage relationship. This image would be produced from a Dockerfile with FROM .

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_resource_url** | **str** | Output only. This contains the base image URL for the derived image occurrence. | [optional] 
**distance** | **int** | Output only. The number of layers by which this image differs from the associated image basis. | [optional] 
**fingerprint** | [**Fingerprint**](Fingerprint.md) |  | [optional] 
**layer_info** | [**List[Layer]**](Layer.md) | This contains layer-specific metadata, if populated it has length \&quot;distance\&quot; and is ordered with [distance] being the layer immediately following the base image and [1] being the final layer. | [optional] 

## Example

```python
from openapi_client.models.derived import Derived

# TODO update the JSON string below
json = "{}"
# create an instance of Derived from a JSON string
derived_instance = Derived.from_json(json)
# print the JSON string representation of the object
print(Derived.to_json())

# convert the object into a dict
derived_dict = derived_instance.to_dict()
# create an instance of Derived from a dict
derived_from_dict = Derived.from_dict(derived_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


