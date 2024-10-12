# InstanceWebDetails

The Web details resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#instanceWebDetails&#x60;. | [optional] 
**launch_url** | **str** | Launch URL for the game. | [optional] 
**preferred** | **bool** | Indicates that this instance is the default for new installations. | [optional] 

## Example

```python
from openapi_client.models.instance_web_details import InstanceWebDetails

# TODO update the JSON string below
json = "{}"
# create an instance of InstanceWebDetails from a JSON string
instance_web_details_instance = InstanceWebDetails.from_json(json)
# print the JSON string representation of the object
print(InstanceWebDetails.to_json())

# convert the object into a dict
instance_web_details_dict = instance_web_details_instance.to_dict()
# create an instance of InstanceWebDetails from a dict
instance_web_details_from_dict = InstanceWebDetails.from_dict(instance_web_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


