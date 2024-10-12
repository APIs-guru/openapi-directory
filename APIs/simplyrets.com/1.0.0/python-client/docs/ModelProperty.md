# ModelProperty

Rets MLS Listing Property

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessibility** | **str** |  | [optional] 
**additional_rooms** | **str** | Additional room information. This is a textual description of additional rooms for the listing.  | [optional] 
**area** | **int** | Square footage of the building associated with a listing | [optional] 
**area_source** | **str** |  | [optional] 
**baths_full** | **int** | Number of full bathrooms | [optional] 
**baths_half** | **int** | Number of half bathrooms | [optional] 
**baths_three_quarter** | **int** | Number of 3/4 bathrooms | [optional] 
**bedrooms** | **int** | Number of bedrooms | [optional] 
**construction** | **str** | The materials that were used in the construction of the property. | [optional] 
**cooling** | **str** | A description of the cooling or air conditioning features of the property. | [optional] 
**exterior_features** | **str** | Exterior Features for the listing  | [optional] 
**fireplaces** | **int** | Number of fireplaces | [optional] 
**flooring** | **str** | The type(s) of flooring found within the property. | [optional] 
**foundation** | **str** |  | [optional] 
**garage_spaces** | **float** | Number of garage spaces | [optional] 
**heating** | **str** | Heating description or short string | [optional] 
**interior_features** | **str** | The properties interior features | [optional] 
**laundry_features** | **str** |  | [optional] 
**lot_description** | **str** |  | [optional] 
**lot_size** | **str** | Lot size dimensions or square footage as a text. This field is generally used to show the pretty formatted lot size.  | [optional] 
**lot_size_acres** | **float** | Lot size in acres  **Added on 2016/05/04 - Not available for all RETS vendors**  | [optional] 
**lot_size_area** | **float** | The total area of the lot.  See &#x60;lotSizeUnits&#x60; for the units of measurement (Square Feet, Square Meters, Acres, etc.).  **Added on 2016/05/04 - Not available for all RETS vendors**  | [optional] 
**lot_size_area_units** | **str** | Unit of measurement for the lotSizeArea field.  e.g. Square Feet, Square Meters, Acres, etc.  If this field is &#x60;null&#x60; the units is the default unit of measure specified by your RETS provider.  **Added on 2016/05/04 - Not available for all RETS vendors**  | [optional] 
**maintenance_expense** | **float** | Yearly maintenance expense | [optional] 
**occupant_name** | **str** |  | [optional] 
**occupant_type** | **str** |  | [optional] 
**owner_name** | **str** |  | [optional] 
**parking** | [**Parking**](Parking.md) |  | [optional] 
**pool_features** | **str** |  | [optional] 
**roof** | **str** | Property roof description | [optional] 
**stories** | **float** | Number of stories or levels. Represented as a &#x60;double&#39; to account for half stories.  | [optional] 
**style** | **str** | Property style description or short string | [optional] 
**sub_type** | **str** | A normalized representation of the listings sub-type.  | [optional] 
**sub_type_raw** | **str** | The raw text representation of the property sub type.  | [optional] 
**subdivision** | **str** | The subdivision or community name | [optional] 
**type** | **str** | Abbreviated property type. RES is Residential, CND is CondoOrTownhome, RNT is Rental, MLF is Multi-Family, CRE is Commercial, LND is Land, FRM is Farm. See the &#x60;propertySubType&#x60; field for more information.  | [optional] 
**view** | **str** | View details and description | [optional] 
**water** | **str** | The name, if known, of the body of water on which the property is located. (E.g., lake name, river name, ocean name, sea name, canal name). Otherwise, this field will contain features of the waterfront on which the property is located.  | [optional] 
**year_built** | **int** | Year the property was built | [optional] 

## Example

```python
from openapi_client.models.model_property import ModelProperty

# TODO update the JSON string below
json = "{}"
# create an instance of ModelProperty from a JSON string
model_property_instance = ModelProperty.from_json(json)
# print the JSON string representation of the object
print(ModelProperty.to_json())

# convert the object into a dict
model_property_dict = model_property_instance.to_dict()
# create an instance of ModelProperty from a dict
model_property_from_dict = ModelProperty.from_dict(model_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


