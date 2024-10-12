# ResourceNameAvailability

Information regarding availability of a resource name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | If reason &#x3D;&#x3D; invalid, provide the user with the reason why the given name is invalid, and provide the resource naming requirements so that the user can select a valid name. If reason &#x3D;&#x3D; AlreadyExists, explain that resource name is already in use, and direct them to select a different name. | [optional] 
**name_available** | **bool** | &lt;code&gt;true&lt;/code&gt; indicates name is valid and available. &lt;code&gt;false&lt;/code&gt; indicates the name is invalid, unavailable, or both. | [optional] 
**reason** | **str** | &lt;code&gt;Invalid&lt;/code&gt; indicates the name provided does not match Azure App Service naming requirements. &lt;code&gt;AlreadyExists&lt;/code&gt; indicates that the name is already in use and is therefore unavailable. | [optional] 

## Example

```python
from openapi_client.models.resource_name_availability import ResourceNameAvailability

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceNameAvailability from a JSON string
resource_name_availability_instance = ResourceNameAvailability.from_json(json)
# print the JSON string representation of the object
print(ResourceNameAvailability.to_json())

# convert the object into a dict
resource_name_availability_dict = resource_name_availability_instance.to_dict()
# create an instance of ResourceNameAvailability from a dict
resource_name_availability_from_dict = ResourceNameAvailability.from_dict(resource_name_availability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


