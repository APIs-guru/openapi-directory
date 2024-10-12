# StandardResourceMetadata

The standard metadata of a cloud resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_attributes** | **List[str]** | Additional searchable attributes of this resource. Informational only. The exact set of attributes is subject to change. For example: project id, DNS name etc. | [optional] 
**asset_type** | **str** | The type of this resource. For example: \&quot;compute.googleapis.com/Disk\&quot;. | [optional] 
**description** | **str** | One or more paragraphs of text description of this resource. Maximum length could be up to 1M bytes. | [optional] 
**display_name** | **str** | The display name of this resource. | [optional] 
**labels** | **Dict[str, str]** | Labels associated with this resource. See [Labelling and grouping Google Cloud resources](https://cloud.google.com/blog/products/gcp/labelling-and-grouping-your-google-cloud-platform-resources) for more information. | [optional] 
**location** | **str** | Location can be \&quot;global\&quot;, regional like \&quot;us-east1\&quot;, or zonal like \&quot;us-west1-b\&quot;. | [optional] 
**name** | **str** | The full resource name. For example: &#x60;//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1&#x60;. See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. | [optional] 
**network_tags** | **List[str]** | Network tags associated with this resource. Like labels, network tags are a type of annotations used to group Google Cloud resources. See [Labelling Google Cloud resources](lhttps://cloud.google.com/blog/products/gcp/labelling-and-grouping-your-google-cloud-platform-resources) for more information. | [optional] 
**project** | **str** | The project that this resource belongs to, in the form of &#x60;projects/{project_number}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.standard_resource_metadata import StandardResourceMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of StandardResourceMetadata from a JSON string
standard_resource_metadata_instance = StandardResourceMetadata.from_json(json)
# print the JSON string representation of the object
print(StandardResourceMetadata.to_json())

# convert the object into a dict
standard_resource_metadata_dict = standard_resource_metadata_instance.to_dict()
# create an instance of StandardResourceMetadata from a dict
standard_resource_metadata_from_dict = StandardResourceMetadata.from_dict(standard_resource_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


