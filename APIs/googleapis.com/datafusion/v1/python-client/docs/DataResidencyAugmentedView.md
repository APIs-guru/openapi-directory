# DataResidencyAugmentedView

Next tag: 7

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cr_gopo_guris** | **List[str]** | Cloud resource to Google owned production object mapping in the form of GURIs. The GURIs should be available in DG KB storage/cns tables. This is the preferred way of providing cloud resource mappings. For further details please read go/cloud-resource-monitoring_sig | [optional] 
**cr_gopo_prefixes** | **List[str]** | Cloud resource to Google owned production object mapping in the form of prefixes. These should be available in DG KB storage/cns tables. The entity type, which is the part of the string before the first colon in the GURI, must be completely specified in prefix. For details about GURI please read go/guri. For further details about the field please read go/cloud-resource-monitoring_sig. | [optional] 
**service_data** | [**ServiceData**](ServiceData.md) |  | [optional] 
**tp_ids** | **List[str]** | The list of project_id&#39;s of the tenant projects in the &#39;google.com&#39; org which serve the Cloud Resource. See go/drz-mst-sig for more details. | [optional] 

## Example

```python
from openapi_client.models.data_residency_augmented_view import DataResidencyAugmentedView

# TODO update the JSON string below
json = "{}"
# create an instance of DataResidencyAugmentedView from a JSON string
data_residency_augmented_view_instance = DataResidencyAugmentedView.from_json(json)
# print the JSON string representation of the object
print(DataResidencyAugmentedView.to_json())

# convert the object into a dict
data_residency_augmented_view_dict = data_residency_augmented_view_instance.to_dict()
# create an instance of DataResidencyAugmentedView from a dict
data_residency_augmented_view_from_dict = DataResidencyAugmentedView.from_dict(data_residency_augmented_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


