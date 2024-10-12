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
 * PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-10-12T07:52:17.384654-04:00[America/New_York]", comments = "Generator version: 7.9.0")
public class PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints {
  public static final String SERIALIZED_NAME_ASSETS_GROUPS = "assetsGroups";
  @SerializedName(SERIALIZED_NAME_ASSETS_GROUPS)
  private List<Set<Integer>> assetsGroups = new ArrayList<>();

  public static final String SERIALIZED_NAME_ASSETS_GROUPS_MATRIX = "assetsGroupsMatrix";
  @SerializedName(SERIALIZED_NAME_ASSETS_GROUPS_MATRIX)
  private List<List<BigDecimal>> assetsGroupsMatrix = new ArrayList<>();

  public static final String SERIALIZED_NAME_DELTA_RETURN = "deltaReturn";
  @SerializedName(SERIALIZED_NAME_DELTA_RETURN)
  private BigDecimal deltaReturn = new BigDecimal("0.1");

  public static final String SERIALIZED_NAME_DELTA_VOLATILITY = "deltaVolatility";
  @SerializedName(SERIALIZED_NAME_DELTA_VOLATILITY)
  private BigDecimal deltaVolatility = new BigDecimal("0.1");

  public static final String SERIALIZED_NAME_MAXIMUM_ASSETS_GROUPS_WEIGHTS = "maximumAssetsGroupsWeights";
  @SerializedName(SERIALIZED_NAME_MAXIMUM_ASSETS_GROUPS_WEIGHTS)
  private List<BigDecimal> maximumAssetsGroupsWeights = new ArrayList<>();

  public static final String SERIALIZED_NAME_MAXIMUM_ASSETS_WEIGHTS = "maximumAssetsWeights";
  @SerializedName(SERIALIZED_NAME_MAXIMUM_ASSETS_WEIGHTS)
  private List<BigDecimal> maximumAssetsWeights = new ArrayList<>();

  public static final String SERIALIZED_NAME_MAXIMUM_PORTFOLIO_EXPOSURE = "maximumPortfolioExposure";
  @SerializedName(SERIALIZED_NAME_MAXIMUM_PORTFOLIO_EXPOSURE)
  private BigDecimal maximumPortfolioExposure = new BigDecimal("1");

  public static final String SERIALIZED_NAME_MINIMUM_ASSETS_WEIGHTS = "minimumAssetsWeights";
  @SerializedName(SERIALIZED_NAME_MINIMUM_ASSETS_WEIGHTS)
  private List<BigDecimal> minimumAssetsWeights = new ArrayList<>();

  public static final String SERIALIZED_NAME_MINIMUM_PORTFOLIO_EXPOSURE = "minimumPortfolioExposure";
  @SerializedName(SERIALIZED_NAME_MINIMUM_PORTFOLIO_EXPOSURE)
  private BigDecimal minimumPortfolioExposure = new BigDecimal("1");

  public PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints() {
  }

  public PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints assetsGroups(List<Set<Integer>> assetsGroups) {
    this.assetsGroups = assetsGroups;
    return this;
  }

  public PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints addAssetsGroupsItem(Set<Integer> assetsGroupsItem) {
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


  public PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints assetsGroupsMatrix(List<List<BigDecimal>> assetsGroupsMatrix) {
    this.assetsGroupsMatrix = assetsGroupsMatrix;
    return this;
  }

  public PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints addAssetsGroupsMatrixItem(List<BigDecimal> assetsGroupsMatrixItem) {
    if (this.assetsGroupsMatrix == null) {
      this.assetsGroupsMatrix = new ArrayList<>();
    }
    this.assetsGroupsMatrix.add(assetsGroupsMatrixItem);
    return this;
  }

  /**
   * assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups
   * @return assetsGroupsMatrix
   */
  @javax.annotation.Nullable
  public List<List<BigDecimal>> getAssetsGroupsMatrix() {
    return assetsGroupsMatrix;
  }

  public void setAssetsGroupsMatrix(List<List<BigDecimal>> assetsGroupsMatrix) {
    this.assetsGroupsMatrix = assetsGroupsMatrix;
  }


  public PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints deltaReturn(BigDecimal deltaReturn) {
    this.deltaReturn = deltaReturn;
    return this;
  }

  /**
   * The relative tolerance over the maximum return portfolio return
   * minimum: 0
   * @return deltaReturn
   */
  @javax.annotation.Nullable
  public BigDecimal getDeltaReturn() {
    return deltaReturn;
  }

  public void setDeltaReturn(BigDecimal deltaReturn) {
    this.deltaReturn = deltaReturn;
  }


  public PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints deltaVolatility(BigDecimal deltaVolatility) {
    this.deltaVolatility = deltaVolatility;
    return this;
  }

  /**
   * The relative tolerance over the maximum return portfolio volatility, if applicable
   * minimum: 0
   * @return deltaVolatility
   */
  @javax.annotation.Nullable
  public BigDecimal getDeltaVolatility() {
    return deltaVolatility;
  }

  public void setDeltaVolatility(BigDecimal deltaVolatility) {
    this.deltaVolatility = deltaVolatility;
  }


  public PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints maximumAssetsGroupsWeights(List<BigDecimal> maximumAssetsGroupsWeights) {
    this.maximumAssetsGroupsWeights = maximumAssetsGroupsWeights;
    return this;
  }

  public PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints addMaximumAssetsGroupsWeightsItem(BigDecimal maximumAssetsGroupsWeightsItem) {
    if (this.maximumAssetsGroupsWeights == null) {
      this.maximumAssetsGroupsWeights = new ArrayList<>();
    }
    this.maximumAssetsGroupsWeights.add(maximumAssetsGroupsWeightsItem);
    return this;
  }

  /**
   * maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided
   * @return maximumAssetsGroupsWeights
   */
  @javax.annotation.Nullable
  public List<BigDecimal> getMaximumAssetsGroupsWeights() {
    return maximumAssetsGroupsWeights;
  }

  public void setMaximumAssetsGroupsWeights(List<BigDecimal> maximumAssetsGroupsWeights) {
    this.maximumAssetsGroupsWeights = maximumAssetsGroupsWeights;
  }


  public PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints maximumAssetsWeights(List<BigDecimal> maximumAssetsWeights) {
    this.maximumAssetsWeights = maximumAssetsWeights;
    return this;
  }

  public PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints addMaximumAssetsWeightsItem(BigDecimal maximumAssetsWeightsItem) {
    if (this.maximumAssetsWeights == null) {
      this.maximumAssetsWeights = new ArrayList<>();
    }
    this.maximumAssetsWeights.add(maximumAssetsWeightsItem);
    return this;
  }

  /**
   * maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage
   * @return maximumAssetsWeights
   */
  @javax.annotation.Nullable
  public List<BigDecimal> getMaximumAssetsWeights() {
    return maximumAssetsWeights;
  }

  public void setMaximumAssetsWeights(List<BigDecimal> maximumAssetsWeights) {
    this.maximumAssetsWeights = maximumAssetsWeights;
  }


  public PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints maximumPortfolioExposure(BigDecimal maximumPortfolioExposure) {
    this.maximumPortfolioExposure = maximumPortfolioExposure;
    return this;
  }

  /**
   * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
   * minimum: 0
   * maximum: 1
   * @return maximumPortfolioExposure
   */
  @javax.annotation.Nullable
  public BigDecimal getMaximumPortfolioExposure() {
    return maximumPortfolioExposure;
  }

  public void setMaximumPortfolioExposure(BigDecimal maximumPortfolioExposure) {
    this.maximumPortfolioExposure = maximumPortfolioExposure;
  }


  public PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints minimumAssetsWeights(List<BigDecimal> minimumAssetsWeights) {
    this.minimumAssetsWeights = minimumAssetsWeights;
    return this;
  }

  public PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints addMinimumAssetsWeightsItem(BigDecimal minimumAssetsWeightsItem) {
    if (this.minimumAssetsWeights == null) {
      this.minimumAssetsWeights = new ArrayList<>();
    }
    this.minimumAssetsWeights.add(minimumAssetsWeightsItem);
    return this;
  }

  /**
   * minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage
   * @return minimumAssetsWeights
   */
  @javax.annotation.Nullable
  public List<BigDecimal> getMinimumAssetsWeights() {
    return minimumAssetsWeights;
  }

  public void setMinimumAssetsWeights(List<BigDecimal> minimumAssetsWeights) {
    this.minimumAssetsWeights = minimumAssetsWeights;
  }


  public PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints minimumPortfolioExposure(BigDecimal minimumPortfolioExposure) {
    this.minimumPortfolioExposure = minimumPortfolioExposure;
    return this;
  }

  /**
   * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
   * minimum: 0
   * maximum: 1
   * @return minimumPortfolioExposure
   */
  @javax.annotation.Nullable
  public BigDecimal getMinimumPortfolioExposure() {
    return minimumPortfolioExposure;
  }

  public void setMinimumPortfolioExposure(BigDecimal minimumPortfolioExposure) {
    this.minimumPortfolioExposure = minimumPortfolioExposure;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints portfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints = (PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints) o;
    return Objects.equals(this.assetsGroups, portfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints.assetsGroups) &&
        Objects.equals(this.assetsGroupsMatrix, portfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints.assetsGroupsMatrix) &&
        Objects.equals(this.deltaReturn, portfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints.deltaReturn) &&
        Objects.equals(this.deltaVolatility, portfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints.deltaVolatility) &&
        Objects.equals(this.maximumAssetsGroupsWeights, portfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints.maximumAssetsGroupsWeights) &&
        Objects.equals(this.maximumAssetsWeights, portfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints.maximumAssetsWeights) &&
        Objects.equals(this.maximumPortfolioExposure, portfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints.maximumPortfolioExposure) &&
        Objects.equals(this.minimumAssetsWeights, portfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints.minimumAssetsWeights) &&
        Objects.equals(this.minimumPortfolioExposure, portfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints.minimumPortfolioExposure);
  }

  @Override
  public int hashCode() {
    return Objects.hash(assetsGroups, assetsGroupsMatrix, deltaReturn, deltaVolatility, maximumAssetsGroupsWeights, maximumAssetsWeights, maximumPortfolioExposure, minimumAssetsWeights, minimumPortfolioExposure);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints {\n");
    sb.append("    assetsGroups: ").append(toIndentedString(assetsGroups)).append("\n");
    sb.append("    assetsGroupsMatrix: ").append(toIndentedString(assetsGroupsMatrix)).append("\n");
    sb.append("    deltaReturn: ").append(toIndentedString(deltaReturn)).append("\n");
    sb.append("    deltaVolatility: ").append(toIndentedString(deltaVolatility)).append("\n");
    sb.append("    maximumAssetsGroupsWeights: ").append(toIndentedString(maximumAssetsGroupsWeights)).append("\n");
    sb.append("    maximumAssetsWeights: ").append(toIndentedString(maximumAssetsWeights)).append("\n");
    sb.append("    maximumPortfolioExposure: ").append(toIndentedString(maximumPortfolioExposure)).append("\n");
    sb.append("    minimumAssetsWeights: ").append(toIndentedString(minimumAssetsWeights)).append("\n");
    sb.append("    minimumPortfolioExposure: ").append(toIndentedString(minimumPortfolioExposure)).append("\n");
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
    openapiFields.add("assetsGroups");
    openapiFields.add("assetsGroupsMatrix");
    openapiFields.add("deltaReturn");
    openapiFields.add("deltaVolatility");
    openapiFields.add("maximumAssetsGroupsWeights");
    openapiFields.add("maximumAssetsWeights");
    openapiFields.add("maximumPortfolioExposure");
    openapiFields.add("minimumAssetsWeights");
    openapiFields.add("minimumPortfolioExposure");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

  /**
   * Validates the JSON Element and throws an exception if issues found
   *
   * @param jsonElement JSON Element
   * @throws IOException if the JSON Element is invalid with respect to PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints
   */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints is not found in the empty JSON string", PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      // ensure the optional json data is an array if present
      if (jsonObj.get("assetsGroups") != null && !jsonObj.get("assetsGroups").isJsonNull() && !jsonObj.get("assetsGroups").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `assetsGroups` to be an array in the JSON string but got `%s`", jsonObj.get("assetsGroups").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("assetsGroupsMatrix") != null && !jsonObj.get("assetsGroupsMatrix").isJsonNull() && !jsonObj.get("assetsGroupsMatrix").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `assetsGroupsMatrix` to be an array in the JSON string but got `%s`", jsonObj.get("assetsGroupsMatrix").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("maximumAssetsGroupsWeights") != null && !jsonObj.get("maximumAssetsGroupsWeights").isJsonNull() && !jsonObj.get("maximumAssetsGroupsWeights").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `maximumAssetsGroupsWeights` to be an array in the JSON string but got `%s`", jsonObj.get("maximumAssetsGroupsWeights").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("maximumAssetsWeights") != null && !jsonObj.get("maximumAssetsWeights").isJsonNull() && !jsonObj.get("maximumAssetsWeights").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `maximumAssetsWeights` to be an array in the JSON string but got `%s`", jsonObj.get("maximumAssetsWeights").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("minimumAssetsWeights") != null && !jsonObj.get("minimumAssetsWeights").isJsonNull() && !jsonObj.get("minimumAssetsWeights").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `minimumAssetsWeights` to be an array in the JSON string but got `%s`", jsonObj.get("minimumAssetsWeights").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints.class));

       return (TypeAdapter<T>) new TypeAdapter<PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints>() {
           @Override
           public void write(JsonWriter out, PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

  /**
   * Create an instance of PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints given an JSON string
   *
   * @param jsonString JSON string
   * @return An instance of PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints
   * @throws IOException if the JSON string is invalid with respect to PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints
   */
  public static PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints.class);
  }

  /**
   * Convert an instance of PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints to an JSON string
   *
   * @return JSON string
   */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

