# ResourceLocation

Location information about a resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_locations** | **List[str]** | The locations of a resource after the execution of the operation. Requests to create or delete a location based resource must populate the &#39;current_locations&#39; field and not the &#39;original_locations&#39; field. For example: \&quot;europe-west1-a\&quot; \&quot;us-east1\&quot; \&quot;nam3\&quot; | [optional] 
**original_locations** | **List[str]** | The locations of a resource prior to the execution of the operation. Requests that mutate the resource&#39;s location must populate both the &#39;original_locations&#39; as well as the &#39;current_locations&#39; fields. For example: \&quot;europe-west1-a\&quot; \&quot;us-east1\&quot; \&quot;nam3\&quot; | [optional] 

## Example

```python
from openapi_client.models.resource_location import ResourceLocation

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceLocation from a JSON string
resource_location_instance = ResourceLocation.from_json(json)
# print the JSON string representation of the object
print(ResourceLocation.to_json())

# convert the object into a dict
resource_location_dict = resource_location_instance.to_dict()
# create an instance of ResourceLocation from a dict
resource_location_from_dict = ResourceLocation.from_dict(resource_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


