# PackageInfomation

Contains information about the package being shipped by the customer to the Microsoft data center.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier_name** | **str** | The name of the carrier that is used to ship the import or export drives. | 
**drive_count** | **int** | The number of drives included in the package. | 
**ship_date** | **str** | The date when the package is shipped. | 
**tracking_number** | **str** | The tracking number of the package. | 

## Example

```python
from openapi_client.models.package_infomation import PackageInfomation

# TODO update the JSON string below
json = "{}"
# create an instance of PackageInfomation from a JSON string
package_infomation_instance = PackageInfomation.from_json(json)
# print the JSON string representation of the object
print(PackageInfomation.to_json())

# convert the object into a dict
package_infomation_dict = package_infomation_instance.to_dict()
# create an instance of PackageInfomation from a dict
package_infomation_from_dict = PackageInfomation.from_dict(package_infomation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


