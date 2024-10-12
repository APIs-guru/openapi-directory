# ProductStatusDestinationStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approval_pending** | **bool** | Whether the approval status might change due to further processing. | [optional] 
**approval_status** | **str** | The destination&#39;s approval status. Acceptable values are: - \&quot;&#x60;approved&#x60;\&quot; - \&quot;&#x60;disapproved&#x60;\&quot;  | [optional] 
**destination** | **str** | The name of the destination | [optional] 
**intention** | **str** | Provided for backward compatibility only. Always set to \&quot;required\&quot;. Acceptable values are: - \&quot;&#x60;default&#x60;\&quot; - \&quot;&#x60;excluded&#x60;\&quot; - \&quot;&#x60;optional&#x60;\&quot; - \&quot;&#x60;required&#x60;\&quot;  | [optional] 

## Example

```python
from openapi_client.models.product_status_destination_status import ProductStatusDestinationStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ProductStatusDestinationStatus from a JSON string
product_status_destination_status_instance = ProductStatusDestinationStatus.from_json(json)
# print the JSON string representation of the object
print(ProductStatusDestinationStatus.to_json())

# convert the object into a dict
product_status_destination_status_dict = product_status_destination_status_instance.to_dict()
# create an instance of ProductStatusDestinationStatus from a dict
product_status_destination_status_from_dict = ProductStatusDestinationStatus.from_dict(product_status_destination_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


