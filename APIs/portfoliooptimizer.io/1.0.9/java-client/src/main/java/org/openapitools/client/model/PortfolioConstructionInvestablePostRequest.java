/*
 * Portfolio Optimizer
 * Portfolio Optimizer is a [Web API](https://en.wikipedia.org/wiki/Web_API) to analyze and optimize investment portfolios (collection of financial assets such as stocks, bonds, ETFs, crypto-currencies) using modern portfolio theory algorithms (mean-variance, VaR, etc.).  # API General Information    Portfolio Optimizer is based on [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) for easy integration, uses [JSON](https://en.wikipedia.org/wiki/JSON) for the exchange of data and uses a standard [HTTP verb](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods) (`POST`) to represent the action(s).  Portfolio Optimizer is also as secured as a Web API could be:  * [256-bit HTTPS Encryption](https://en.wikipedia.org/wiki/HTTPS) * No usage of cookies * No usage of personal data    ## API Headers  The following HTTP header(s) are required when calling Portfolio Optimizer endpoints: * `Content-type: application/json`     This header specifies that the data provided in input to the endpoint is in JSON format  The following HTTP header(s) are optional when calling Portfolio Optimizer endpoints: * `Content-Encoding: gzip`     This header indicates that the data provided in input to the endpoint is compressed with gzip. * `X-API-Key: <private API key>`     This header enables [authenticated users](#auth) to provide their private [API key](#overview--api-key) in order to [benefit from higher API limits](#overview--api-limits)  ## API Key Portfolio Optimizer is free to use, but not free to run.  In order to obtain an API key and benefit from [higher API limits](#overview--api-limits), a *small* participation to Portfolio Optimizer running costs is required.  This participation takes the form of coffee(s), with one coffee = one month of usage.  <p><a href=\"https://www.buymeacoffee.com/portfolioopt\"><img alt='Buy a Coffee at buymeacoffee.com' src=\"https://img.buymeacoffee.com/button-api/?text=Buymeacoffee.com&emoji=&slug=portfolioopt&button_colour=000000&font_colour=ffffff&font_family=Cookie&outline_colour=ffffff&coffee_colour=FFDD00\"></a></p>   > **Notes:**  > * Please make sure not to expose your API key publicly!  ## API Limits   Portfolio Optimizer comes with *fairly reasonable* API limits.  For anonymous users:   * The API requests are restricted to a subset of all the available endpoints and/or endpoints features   * The API requests are limited to 1 request per second for all the anonymous users combined, with concurrent requests rejected  * The API requests are limited to 1 second of execution time * The API requests are limited to 20 assets, 250 portfolios, 500 series data points and 5 factors  For authenticated users with an [API key](#overview--api-key):   * The API requests have access to all the available endpoints and endpoints features * The API requests are limited to 10000 requests per 24 hour per API key, with concurrent requests queued * The API requests are limited to 2.5 seconds of execution time * The API requests are limited to 100 assets, 1250 portfolios, 2500 series data points and 25 factors  > **Notes:**  > * It is possible to further relax the API limits, or to disable the API limits alltogether; please [contact the support](https://portfoliooptimizer.io/contact/) for more details. > * Information on the API rate limits are provided in response messages HTTP headers `x-ratelimit-*`:   >   * `x-ratelimit-limit-second`, the limit on the number of API requests per second >   * `x-ratelimit-remaining-second`, the number of remaining API requests in the current second     >   * `x-ratelimit-limit-minute`, the limit on the number of API requests per minute >   * ...  ## API Regions Portfolio Optimizer servers are located in Western Europe.  > **Notes:**  > * It is possible to deploy Portfolio Optimizer in other geographical regions, for example to improve the API latency; please [contact the support](https://portfoliooptimizer.io/contact/) for more details.   ## API Response Codes         Standard [HTTP response codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) are used by Portfolio Optimizer to provide details on the status of API requests.  | HTTP Code | Description | Notes | | --------- | ----------- | ----- | | 200 | Request successfully processed | - | | 400 | Request failed to be processed because of incorrect content | The response message body contains information on the incorrect content | | 401 | Request failed to be processed because of invalid API key | - | | 404 | Request failed to be processed because of non existing endpoint | The requested endpoint might exist, but needs to be accessed with another HTTP method (e.g., `POST` instead of `GET`) | | 429 | Request failed to be processed because of API limits violated | The response message HTTP headers `x-ratelimit-*` contain information on the [API limits](#overview--api-limits) | | 500 | Request failed to be processed because of an internal error | Something went wrong on Portfolio Optimizer side, do not hesitate to [report the issue](#overview--support) | | 502 | Request failed to be processed because of a temporary connectivity error | Something went wrong on Portfolio Optimizer side, please check the [API status](#overview--api-status) and do not hesitate to [report the issue](#overview--support) |  ## API Status    Portfolio Optimizer is monitored 24/7 by [UptimeRobot](https://stats.uptimerobot.com/wgW71SL1AW).  # Support  For any issue or question about Portfolio Optimizer, please do not hesitate to [contact the support](https://portfoliooptimizer.io/contact/). 
 *
 * The version of the OpenAPI document: 1.0.9
 * Contact: contact@portfoliooptimizer.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Set;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.google.gson.TypeAdapterFactory;
import com.google.gson.reflect.TypeToken;
import com.google.gson.TypeAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;

import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.openapitools.client.JSON;

/**
 * PortfolioConstructionInvestablePostRequest
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-10-12T07:52:17.384654-04:00[America/New_York]", comments = "Generator version: 7.9.0")
public class PortfolioConstructionInvestablePostRequest {
  public static final String SERIALIZED_NAME_ASSETS = "assets";
  @SerializedName(SERIALIZED_NAME_ASSETS)
  private Integer assets;

  public static final String SERIALIZED_NAME_ASSETS_GROUPS = "assetsGroups";
  @SerializedName(SERIALIZED_NAME_ASSETS_GROUPS)
  private List<Set<Integer>> assetsGroups = new ArrayList<>();

  public static final String SERIALIZED_NAME_ASSETS_GROUPS_WEIGHTS = "assetsGroupsWeights";
  @SerializedName(SERIALIZED_NAME_ASSETS_GROUPS_WEIGHTS)
  private List<BigDecimal> assetsGroupsWeights = new ArrayList<>();

  public static final String SERIALIZED_NAME_ASSETS_MINIMUM_NOTIONAL_VALUES = "assetsMinimumNotionalValues";
  @SerializedName(SERIALIZED_NAME_ASSETS_MINIMUM_NOTIONAL_VALUES)
  private List<BigDecimal> assetsMinimumNotionalValues = new ArrayList<>();

  public static final String SERIALIZED_NAME_ASSETS_MINIMUM_POSITIONS = "assetsMinimumPositions";
  @SerializedName(SERIALIZED_NAME_ASSETS_MINIMUM_POSITIONS)
  private List<BigDecimal> assetsMinimumPositions = new ArrayList<>();

  public static final String SERIALIZED_NAME_ASSETS_PRICES = "assetsPrices";
  @SerializedName(SERIALIZED_NAME_ASSETS_PRICES)
  private List<BigDecimal> assetsPrices = new ArrayList<>();

  public static final String SERIALIZED_NAME_ASSETS_SIZE_LOTS = "assetsSizeLots";
  @SerializedName(SERIALIZED_NAME_ASSETS_SIZE_LOTS)
  private List<BigDecimal> assetsSizeLots = new ArrayList<>();

  public static final String SERIALIZED_NAME_ASSETS_WEIGHTS = "assetsWeights";
  @SerializedName(SERIALIZED_NAME_ASSETS_WEIGHTS)
  private List<BigDecimal> assetsWeights = new ArrayList<>();

  public static final String SERIALIZED_NAME_MAXIMUM_ASSETS_GROUPS_WEIGHTS = "maximumAssetsGroupsWeights";
  @SerializedName(SERIALIZED_NAME_MAXIMUM_ASSETS_GROUPS_WEIGHTS)
  private List<BigDecimal> maximumAssetsGroupsWeights = new ArrayList<>();

  public static final String SERIALIZED_NAME_PORTFOLIO_VALUE = "portfolioValue";
  @SerializedName(SERIALIZED_NAME_PORTFOLIO_VALUE)
  private BigDecimal portfolioValue;

  public PortfolioConstructionInvestablePostRequest() {
  }

  public PortfolioConstructionInvestablePostRequest assets(Integer assets) {
    this.assets = assets;
    return this;
  }

  /**
   * The number of assets
   * minimum: 2
   * @return assets
   */
  @javax.annotation.Nonnull
  public Integer getAssets() {
    return assets;
  }

  public void setAssets(Integer assets) {
    this.assets = assets;
  }


  public PortfolioConstructionInvestablePostRequest assetsGroups(List<Set<Integer>> assetsGroups) {
    this.assetsGroups = assetsGroups;
    return this;
  }

  public PortfolioConstructionInvestablePostRequest addAssetsGroupsItem(Set<Integer> assetsGroupsItem) {
    if (this.assetsGroups == null) {
      this.assetsGroups = new ArrayList<>();
    }
    this.assetsGroups.add(assetsGroupsItem);
    return this;
  }

  /**
   * Get assetsGroups
   * @return assetsGroups
   */
  @javax.annotation.Nullable
  public List<Set<Integer>> getAssetsGroups() {
    return assetsGroups;
  }

  public void setAssetsGroups(List<Set<Integer>> assetsGroups) {
    this.assetsGroups = assetsGroups;
  }


  public PortfolioConstructionInvestablePostRequest assetsGroupsWeights(List<BigDecimal> assetsGroupsWeights) {
    this.assetsGroupsWeights = assetsGroupsWeights;
    return this;
  }

  public PortfolioConstructionInvestablePostRequest addAssetsGroupsWeightsItem(BigDecimal assetsGroupsWeightsItem) {
    if (this.assetsGroupsWeights == null) {
      this.assetsGroupsWeights = new ArrayList<>();
    }
    this.assetsGroupsWeights.add(assetsGroupsWeightsItem);
    return this;
  }

  /**
   * assetsGroupsWeights[i] is the desired weight of the assets group k in the portfolio, in percentage (can be null to indicate no specific desire); requires assetsGroups to be present
   * @return assetsGroupsWeights
   */
  @javax.annotation.Nullable
  public List<BigDecimal> getAssetsGroupsWeights() {
    return assetsGroupsWeights;
  }

  public void setAssetsGroupsWeights(List<BigDecimal> assetsGroupsWeights) {
    this.assetsGroupsWeights = assetsGroupsWeights;
  }


  public PortfolioConstructionInvestablePostRequest assetsMinimumNotionalValues(List<BigDecimal> assetsMinimumNotionalValues) {
    this.assetsMinimumNotionalValues = assetsMinimumNotionalValues;
    return this;
  }

  public PortfolioConstructionInvestablePostRequest addAssetsMinimumNotionalValuesItem(BigDecimal assetsMinimumNotionalValuesItem) {
    if (this.assetsMinimumNotionalValues == null) {
      this.assetsMinimumNotionalValues = new ArrayList<>();
    }
    this.assetsMinimumNotionalValues.add(assetsMinimumNotionalValuesItem);
    return this;
  }

  /**
   * assetsMinimumNotionalValues[i] is the minimum monetary value that the position in the asset i is required to represent when the asset i is included in the portfolio
   * @return assetsMinimumNotionalValues
   */
  @javax.annotation.Nullable
  public List<BigDecimal> getAssetsMinimumNotionalValues() {
    return assetsMinimumNotionalValues;
  }

  public void setAssetsMinimumNotionalValues(List<BigDecimal> assetsMinimumNotionalValues) {
    this.assetsMinimumNotionalValues = assetsMinimumNotionalValues;
  }


  public PortfolioConstructionInvestablePostRequest assetsMinimumPositions(List<BigDecimal> assetsMinimumPositions) {
    this.assetsMinimumPositions = assetsMinimumPositions;
    return this;
  }

  public PortfolioConstructionInvestablePostRequest addAssetsMinimumPositionsItem(BigDecimal assetsMinimumPositionsItem) {
    if (this.assetsMinimumPositions == null) {
      this.assetsMinimumPositions = new ArrayList<>();
    }
    this.assetsMinimumPositions.add(assetsMinimumPositionsItem);
    return this;
  }

  /**
   * assetsMinimumPositions[i] is the minimum number of shares of the asset i that is required to purchase when the asset i is included in the portfolio (usual values are the same as for assetsSizeLots)
   * @return assetsMinimumPositions
   */
  @javax.annotation.Nullable
  public List<BigDecimal> getAssetsMinimumPositions() {
    return assetsMinimumPositions;
  }

  public void setAssetsMinimumPositions(List<BigDecimal> assetsMinimumPositions) {
    this.assetsMinimumPositions = assetsMinimumPositions;
  }


  public PortfolioConstructionInvestablePostRequest assetsPrices(List<BigDecimal> assetsPrices) {
    this.assetsPrices = assetsPrices;
    return this;
  }

  public PortfolioConstructionInvestablePostRequest addAssetsPricesItem(BigDecimal assetsPricesItem) {
    if (this.assetsPrices == null) {
      this.assetsPrices = new ArrayList<>();
    }
    this.assetsPrices.add(assetsPricesItem);
    return this;
  }

  /**
   * assetsPrices[i] is the price of the asset i
   * @return assetsPrices
   */
  @javax.annotation.Nonnull
  public List<BigDecimal> getAssetsPrices() {
    return assetsPrices;
  }

  public void setAssetsPrices(List<BigDecimal> assetsPrices) {
    this.assetsPrices = assetsPrices;
  }


  public PortfolioConstructionInvestablePostRequest assetsSizeLots(List<BigDecimal> assetsSizeLots) {
    this.assetsSizeLots = assetsSizeLots;
    return this;
  }

  public PortfolioConstructionInvestablePostRequest addAssetsSizeLotsItem(BigDecimal assetsSizeLotsItem) {
    if (this.assetsSizeLots == null) {
      this.assetsSizeLots = new ArrayList<>();
    }
    this.assetsSizeLots.add(assetsSizeLotsItem);
    return this;
  }

  /**
   * assetsSizeLots[i] is the number of shares by which it is required to purchase the asset i (usual values are 1 if the asset needs to be purchased share by share, 100 if the asset needs to be purchased by an integer multiple of 100 shares, and 1/1000000 - e.g. for Robinhood broker - if the asset can be purchased by fractional shares)
   * @return assetsSizeLots
   */
  @javax.annotation.Nullable
  public List<BigDecimal> getAssetsSizeLots() {
    return assetsSizeLots;
  }

  public void setAssetsSizeLots(List<BigDecimal> assetsSizeLots) {
    this.assetsSizeLots = assetsSizeLots;
  }


  public PortfolioConstructionInvestablePostRequest assetsWeights(List<BigDecimal> assetsWeights) {
    this.assetsWeights = assetsWeights;
    return this;
  }

  public PortfolioConstructionInvestablePostRequest addAssetsWeightsItem(BigDecimal assetsWeightsItem) {
    if (this.assetsWeights == null) {
      this.assetsWeights = new ArrayList<>();
    }
    this.assetsWeights.add(assetsWeightsItem);
    return this;
  }

  /**
   * assetsWeights[i] is the desired weight of the asset i in the portfolio, in percentage (can be null to indicate no specific desire)
   * @return assetsWeights
   */
  @javax.annotation.Nullable
  public List<BigDecimal> getAssetsWeights() {
    return assetsWeights;
  }

  public void setAssetsWeights(List<BigDecimal> assetsWeights) {
    this.assetsWeights = assetsWeights;
  }


  public PortfolioConstructionInvestablePostRequest maximumAssetsGroupsWeights(List<BigDecimal> maximumAssetsGroupsWeights) {
    this.maximumAssetsGroupsWeights = maximumAssetsGroupsWeights;
    return this;
  }

  public PortfolioConstructionInvestablePostRequest addMaximumAssetsGroupsWeightsItem(BigDecimal maximumAssetsGroupsWeightsItem) {
    if (this.maximumAssetsGroupsWeights == null) {
      this.maximumAssetsGroupsWeights = new ArrayList<>();
    }
    this.maximumAssetsGroupsWeights.add(maximumAssetsGroupsWeightsItem);
    return this;
  }

  /**
   * maximumAssetsGroupsWeights[k] is the maximum desired weight of the assets group k in the portfolio, in percentage (can be null to indicate no specific desire); requires assetsGroups to be present
   * @return maximumAssetsGroupsWeights
   */
  @javax.annotation.Nullable
  public List<BigDecimal> getMaximumAssetsGroupsWeights() {
    return maximumAssetsGroupsWeights;
  }

  public void setMaximumAssetsGroupsWeights(List<BigDecimal> maximumAssetsGroupsWeights) {
    this.maximumAssetsGroupsWeights = maximumAssetsGroupsWeights;
  }


  public PortfolioConstructionInvestablePostRequest portfolioValue(BigDecimal portfolioValue) {
    this.portfolioValue = portfolioValue;
    return this;
  }

  /**
   * The monetary value of the portfolio
   * minimum: 0
   * @return portfolioValue
   */
  @javax.annotation.Nonnull
  public BigDecimal getPortfolioValue() {
    return portfolioValue;
  }

  public void setPortfolioValue(BigDecimal portfolioValue) {
    this.portfolioValue = portfolioValue;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PortfolioConstructionInvestablePostRequest portfolioConstructionInvestablePostRequest = (PortfolioConstructionInvestablePostRequest) o;
    return Objects.equals(this.assets, portfolioConstructionInvestablePostRequest.assets) &&
        Objects.equals(this.assetsGroups, portfolioConstructionInvestablePostRequest.assetsGroups) &&
        Objects.equals(this.assetsGroupsWeights, portfolioConstructionInvestablePostRequest.assetsGroupsWeights) &&
        Objects.equals(this.assetsMinimumNotionalValues, portfolioConstructionInvestablePostRequest.assetsMinimumNotionalValues) &&
        Objects.equals(this.assetsMinimumPositions, portfolioConstructionInvestablePostRequest.assetsMinimumPositions) &&
        Objects.equals(this.assetsPrices, portfolioConstructionInvestablePostRequest.assetsPrices) &&
        Objects.equals(this.assetsSizeLots, portfolioConstructionInvestablePostRequest.assetsSizeLots) &&
        Objects.equals(this.assetsWeights, portfolioConstructionInvestablePostRequest.assetsWeights) &&
        Objects.equals(this.maximumAssetsGroupsWeights, portfolioConstructionInvestablePostRequest.maximumAssetsGroupsWeights) &&
        Objects.equals(this.portfolioValue, portfolioConstructionInvestablePostRequest.portfolioValue);
  }

  @Override
  public int hashCode() {
    return Objects.hash(assets, assetsGroups, assetsGroupsWeights, assetsMinimumNotionalValues, assetsMinimumPositions, assetsPrices, assetsSizeLots, assetsWeights, maximumAssetsGroupsWeights, portfolioValue);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PortfolioConstructionInvestablePostRequest {\n");
    sb.append("    assets: ").append(toIndentedString(assets)).append("\n");
    sb.append("    assetsGroups: ").append(toIndentedString(assetsGroups)).append("\n");
    sb.append("    assetsGroupsWeights: ").append(toIndentedString(assetsGroupsWeights)).append("\n");
    sb.append("    assetsMinimumNotionalValues: ").append(toIndentedString(assetsMinimumNotionalValues)).append("\n");
    sb.append("    assetsMinimumPositions: ").append(toIndentedString(assetsMinimumPositions)).append("\n");
    sb.append("    assetsPrices: ").append(toIndentedString(assetsPrices)).append("\n");
    sb.append("    assetsSizeLots: ").append(toIndentedString(assetsSizeLots)).append("\n");
    sb.append("    assetsWeights: ").append(toIndentedString(assetsWeights)).append("\n");
    sb.append("    maximumAssetsGroupsWeights: ").append(toIndentedString(maximumAssetsGroupsWeights)).append("\n");
    sb.append("    portfolioValue: ").append(toIndentedString(portfolioValue)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }


  public static HashSet<String> openapiFields;
  public static HashSet<String> openapiRequiredFields;

  static {
    // a set of all properties/fields (JSON key names)
    openapiFields = new HashSet<String>();
    openapiFields.add("assets");
    openapiFields.add("assetsGroups");
    openapiFields.add("assetsGroupsWeights");
    openapiFields.add("assetsMinimumNotionalValues");
    openapiFields.add("assetsMinimumPositions");
    openapiFields.add("assetsPrices");
    openapiFields.add("assetsSizeLots");
    openapiFields.add("assetsWeights");
    openapiFields.add("maximumAssetsGroupsWeights");
    openapiFields.add("portfolioValue");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("assets");
    openapiRequiredFields.add("assetsPrices");
    openapiRequiredFields.add("portfolioValue");
  }

  /**
   * Validates the JSON Element and throws an exception if issues found
   *
   * @param jsonElement JSON Element
   * @throws IOException if the JSON Element is invalid with respect to PortfolioConstructionInvestablePostRequest
   */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!PortfolioConstructionInvestablePostRequest.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in PortfolioConstructionInvestablePostRequest is not found in the empty JSON string", PortfolioConstructionInvestablePostRequest.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!PortfolioConstructionInvestablePostRequest.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `PortfolioConstructionInvestablePostRequest` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : PortfolioConstructionInvestablePostRequest.openapiRequiredFields) {
        if (jsonElement.getAsJsonObject().get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      // ensure the optional json data is an array if present
      if (jsonObj.get("assetsGroups") != null && !jsonObj.get("assetsGroups").isJsonNull() && !jsonObj.get("assetsGroups").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `assetsGroups` to be an array in the JSON string but got `%s`", jsonObj.get("assetsGroups").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("assetsGroupsWeights") != null && !jsonObj.get("assetsGroupsWeights").isJsonNull() && !jsonObj.get("assetsGroupsWeights").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `assetsGroupsWeights` to be an array in the JSON string but got `%s`", jsonObj.get("assetsGroupsWeights").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("assetsMinimumNotionalValues") != null && !jsonObj.get("assetsMinimumNotionalValues").isJsonNull() && !jsonObj.get("assetsMinimumNotionalValues").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `assetsMinimumNotionalValues` to be an array in the JSON string but got `%s`", jsonObj.get("assetsMinimumNotionalValues").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("assetsMinimumPositions") != null && !jsonObj.get("assetsMinimumPositions").isJsonNull() && !jsonObj.get("assetsMinimumPositions").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `assetsMinimumPositions` to be an array in the JSON string but got `%s`", jsonObj.get("assetsMinimumPositions").toString()));
      }
      // ensure the required json array is present
      if (jsonObj.get("assetsPrices") == null) {
        throw new IllegalArgumentException("Expected the field `linkedContent` to be an array in the JSON string but got `null`");
      } else if (!jsonObj.get("assetsPrices").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `assetsPrices` to be an array in the JSON string but got `%s`", jsonObj.get("assetsPrices").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("assetsSizeLots") != null && !jsonObj.get("assetsSizeLots").isJsonNull() && !jsonObj.get("assetsSizeLots").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `assetsSizeLots` to be an array in the JSON string but got `%s`", jsonObj.get("assetsSizeLots").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("assetsWeights") != null && !jsonObj.get("assetsWeights").isJsonNull() && !jsonObj.get("assetsWeights").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `assetsWeights` to be an array in the JSON string but got `%s`", jsonObj.get("assetsWeights").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("maximumAssetsGroupsWeights") != null && !jsonObj.get("maximumAssetsGroupsWeights").isJsonNull() && !jsonObj.get("maximumAssetsGroupsWeights").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `maximumAssetsGroupsWeights` to be an array in the JSON string but got `%s`", jsonObj.get("maximumAssetsGroupsWeights").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!PortfolioConstructionInvestablePostRequest.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'PortfolioConstructionInvestablePostRequest' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<PortfolioConstructionInvestablePostRequest> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(PortfolioConstructionInvestablePostRequest.class));

       return (TypeAdapter<T>) new TypeAdapter<PortfolioConstructionInvestablePostRequest>() {
           @Override
           public void write(JsonWriter out, PortfolioConstructionInvestablePostRequest value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public PortfolioConstructionInvestablePostRequest read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

  /**
   * Create an instance of PortfolioConstructionInvestablePostRequest given an JSON string
   *
   * @param jsonString JSON string
   * @return An instance of PortfolioConstructionInvestablePostRequest
   * @throws IOException if the JSON string is invalid with respect to PortfolioConstructionInvestablePostRequest
   */
  public static PortfolioConstructionInvestablePostRequest fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, PortfolioConstructionInvestablePostRequest.class);
  }

  /**
   * Convert an instance of PortfolioConstructionInvestablePostRequest to an JSON string
   *
   * @return JSON string
   */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

