# ImageInformation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_support_end_of_life** | **datetime** |  | [optional] 
**capabilities** | **List[str]** | Not every capability of the Image is listed. Capabilities in this list are considered of special interest and are generally related to integration with other features in the Azure Batch service. | [optional] 
**image_reference** | [**ImageReference**](ImageReference.md) |  | 
**node_agent_skuid** | **str** |  | 
**os_type** | **str** |  | 
**verification_type** | **str** |  | 

## Example

```python
from openapi_client.models.image_information import ImageInformation

# TODO update the JSON string below
json = "{}"
# create an instance of ImageInformation from a JSON string
image_information_instance = ImageInformation.from_json(json)
# print the JSON string representation of the object
print(ImageInformation.to_json())

# convert the object into a dict
image_information_dict = image_information_instance.to_dict()
# create an instance of ImageInformation from a dict
image_information_from_dict = ImageInformation.from_dict(image_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


