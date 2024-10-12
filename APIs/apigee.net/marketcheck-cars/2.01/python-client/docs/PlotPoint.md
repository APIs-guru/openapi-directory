# PlotPoint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dom** | **float** | DOM | [optional] 
**id** | **str** | Listing id | [optional] 
**miles** | **float** | Miles | [optional] 
**msrp** | **float** | Msrp | [optional] 
**price** | **float** | Price | [optional] 
**seller_name** | **str** | Seller name | [optional] 
**vin** | **str** | Vin | [optional] 

## Example

```python
from openapi_client.models.plot_point import PlotPoint

# TODO update the JSON string below
json = "{}"
# create an instance of PlotPoint from a JSON string
plot_point_instance = PlotPoint.from_json(json)
# print the JSON string representation of the object
print(PlotPoint.to_json())

# convert the object into a dict
plot_point_dict = plot_point_instance.to_dict()
# create an instance of PlotPoint from a dict
plot_point_from_dict = PlotPoint.from_dict(plot_point_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


