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
import java.util.Arrays;

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
 * AssetsReturnsSimulationMonteCarloCornishFisherPostRequest
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-10-12T07:52:17.384654-04:00[America/New_York]", comments = "Generator version: 7.9.0")
public class AssetsReturnsSimulationMonteCarloCornishFisherPostRequest {
  public static final String SERIALIZED_NAME_ASSET_AVERAGE_RETURN_PARAMETER = "assetAverageReturnParameter";
  @SerializedName(SERIALIZED_NAME_ASSET_AVERAGE_RETURN_PARAMETER)
  private BigDecimal assetAverageReturnParameter;

  public static final String SERIALIZED_NAME_ASSET_KURTOSIS_PARAMETER = "assetKurtosisParameter";
  @SerializedName(SERIALIZED_NAME_ASSET_KURTOSIS_PARAMETER)
  private BigDecimal assetKurtosisParameter;

  public static final String SERIALIZED_NAME_ASSET_SKEWNESS_PARAMETER = "assetSkewnessParameter";
  @SerializedName(SERIALIZED_NAME_ASSET_SKEWNESS_PARAMETER)
  private BigDecimal assetSkewnessParameter;

  public static final String SERIALIZED_NAME_ASSET_VOLATILITY_PARAMETER = "assetVolatilityParameter";
  @SerializedName(SERIALIZED_NAME_ASSET_VOLATILITY_PARAMETER)
  private BigDecimal assetVolatilityParameter;

  public static final String SERIALIZED_NAME_SIMULATIONS = "simulations";
  @SerializedName(SERIALIZED_NAME_SIMULATIONS)
  private Integer simulations = 1;

  public static final String SERIALIZED_NAME_SIMULATIONS_LENGTH = "simulationsLength";
  @SerializedName(SERIALIZED_NAME_SIMULATIONS_LENGTH)
  private Integer simulationsLength = 1;

  public AssetsReturnsSimulationMonteCarloCornishFisherPostRequest() {
  }

  public AssetsReturnsSimulationMonteCarloCornishFisherPostRequest assetAverageReturnParameter(BigDecimal assetAverageReturnParameter) {
    this.assetAverageReturnParameter = assetAverageReturnParameter;
    return this;
  }

  /**
   * The mean parameter of the Cornish-Fisher distribution, corresponding to the arithmetic average return of the asset
   * @return assetAverageReturnParameter
   */
  @javax.annotation.Nonnull
  public BigDecimal getAssetAverageReturnParameter() {
    return assetAverageReturnParameter;
  }

  public void setAssetAverageReturnParameter(BigDecimal assetAverageReturnParameter) {
    this.assetAverageReturnParameter = assetAverageReturnParameter;
  }


  public AssetsReturnsSimulationMonteCarloCornishFisherPostRequest assetKurtosisParameter(BigDecimal assetKurtosisParameter) {
    this.assetKurtosisParameter = assetKurtosisParameter;
    return this;
  }

  /**
   * The (excess) kurtosis parameter of the Cornish-Fisher distribution, corresponding approximately to the (excess) kurtosis of the asset returns
   * @return assetKurtosisParameter
   */
  @javax.annotation.Nonnull
  public BigDecimal getAssetKurtosisParameter() {
    return assetKurtosisParameter;
  }

  public void setAssetKurtosisParameter(BigDecimal assetKurtosisParameter) {
    this.assetKurtosisParameter = assetKurtosisParameter;
  }


  public AssetsReturnsSimulationMonteCarloCornishFisherPostRequest assetSkewnessParameter(BigDecimal assetSkewnessParameter) {
    this.assetSkewnessParameter = assetSkewnessParameter;
    return this;
  }

  /**
   * The skewness parameter of the Cornish-Fisher distribution, corresponding approximately to the skewness of the asset returns
   * @return assetSkewnessParameter
   */
  @javax.annotation.Nonnull
  public BigDecimal getAssetSkewnessParameter() {
    return assetSkewnessParameter;
  }

  public void setAssetSkewnessParameter(BigDecimal assetSkewnessParameter) {
    this.assetSkewnessParameter = assetSkewnessParameter;
  }


  public AssetsReturnsSimulationMonteCarloCornishFisherPostRequest assetVolatilityParameter(BigDecimal assetVolatilityParameter) {
    this.assetVolatilityParameter = assetVolatilityParameter;
    return this;
  }

  /**
   * The volatility parameter of the Cornish-Fisher distribution, corresponding approximately to the volatility of the asset returns
   * minimum: 0
   * @return assetVolatilityParameter
   */
  @javax.annotation.Nonnull
  public BigDecimal getAssetVolatilityParameter() {
    return assetVolatilityParameter;
  }

  public void setAssetVolatilityParameter(BigDecimal assetVolatilityParameter) {
    this.assetVolatilityParameter = assetVolatilityParameter;
  }


  public AssetsReturnsSimulationMonteCarloCornishFisherPostRequest simulations(Integer simulations) {
    this.simulations = simulations;
    return this;
  }

  /**
   * The number of simulations to perform
   * minimum: 1
   * @return simulations
   */
  @javax.annotation.Nullable
  public Integer getSimulations() {
    return simulations;
  }

  public void setSimulations(Integer simulations) {
    this.simulations = simulations;
  }


  public AssetsReturnsSimulationMonteCarloCornishFisherPostRequest simulationsLength(Integer simulationsLength) {
    this.simulationsLength = simulationsLength;
    return this;
  }

  /**
   * The number of time period(s) to simulate per simulation
   * minimum: 1
   * @return simulationsLength
   */
  @javax.annotation.Nullable
  public Integer getSimulationsLength() {
    return simulationsLength;
  }

  public void setSimulationsLength(Integer simulationsLength) {
    this.simulationsLength = simulationsLength;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AssetsReturnsSimulationMonteCarloCornishFisherPostRequest assetsReturnsSimulationMonteCarloCornishFisherPostRequest = (AssetsReturnsSimulationMonteCarloCornishFisherPostRequest) o;
    return Objects.equals(this.assetAverageReturnParameter, assetsReturnsSimulationMonteCarloCornishFisherPostRequest.assetAverageReturnParameter) &&
        Objects.equals(this.assetKurtosisParameter, assetsReturnsSimulationMonteCarloCornishFisherPostRequest.assetKurtosisParameter) &&
        Objects.equals(this.assetSkewnessParameter, assetsReturnsSimulationMonteCarloCornishFisherPostRequest.assetSkewnessParameter) &&
        Objects.equals(this.assetVolatilityParameter, assetsReturnsSimulationMonteCarloCornishFisherPostRequest.assetVolatilityParameter) &&
        Objects.equals(this.simulations, assetsReturnsSimulationMonteCarloCornishFisherPostRequest.simulations) &&
        Objects.equals(this.simulationsLength, assetsReturnsSimulationMonteCarloCornishFisherPostRequest.simulationsLength);
  }

  @Override
  public int hashCode() {
    return Objects.hash(assetAverageReturnParameter, assetKurtosisParameter, assetSkewnessParameter, assetVolatilityParameter, simulations, simulationsLength);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AssetsReturnsSimulationMonteCarloCornishFisherPostRequest {\n");
    sb.append("    assetAverageReturnParameter: ").append(toIndentedString(assetAverageReturnParameter)).append("\n");
    sb.append("    assetKurtosisParameter: ").append(toIndentedString(assetKurtosisParameter)).append("\n");
    sb.append("    assetSkewnessParameter: ").append(toIndentedString(assetSkewnessParameter)).append("\n");
    sb.append("    assetVolatilityParameter: ").append(toIndentedString(assetVolatilityParameter)).append("\n");
    sb.append("    simulations: ").append(toIndentedString(simulations)).append("\n");
    sb.append("    simulationsLength: ").append(toIndentedString(simulationsLength)).append("\n");
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
    openapiFields.add("assetAverageReturnParameter");
    openapiFields.add("assetKurtosisParameter");
    openapiFields.add("assetSkewnessParameter");
    openapiFields.add("assetVolatilityParameter");
    openapiFields.add("simulations");
    openapiFields.add("simulationsLength");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("assetAverageReturnParameter");
    openapiRequiredFields.add("assetKurtosisParameter");
    openapiRequiredFields.add("assetSkewnessParameter");
    openapiRequiredFields.add("assetVolatilityParameter");
  }

  /**
   * Validates the JSON Element and throws an exception if issues found
   *
   * @param jsonElement JSON Element
   * @throws IOException if the JSON Element is invalid with respect to AssetsReturnsSimulationMonteCarloCornishFisherPostRequest
   */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!AssetsReturnsSimulationMonteCarloCornishFisherPostRequest.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in AssetsReturnsSimulationMonteCarloCornishFisherPostRequest is not found in the empty JSON string", AssetsReturnsSimulationMonteCarloCornishFisherPostRequest.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!AssetsReturnsSimulationMonteCarloCornishFisherPostRequest.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `AssetsReturnsSimulationMonteCarloCornishFisherPostRequest` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : AssetsReturnsSimulationMonteCarloCornishFisherPostRequest.openapiRequiredFields) {
        if (jsonElement.getAsJsonObject().get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!AssetsReturnsSimulationMonteCarloCornishFisherPostRequest.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'AssetsReturnsSimulationMonteCarloCornishFisherPostRequest' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<AssetsReturnsSimulationMonteCarloCornishFisherPostRequest> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(AssetsReturnsSimulationMonteCarloCornishFisherPostRequest.class));

       return (TypeAdapter<T>) new TypeAdapter<AssetsReturnsSimulationMonteCarloCornishFisherPostRequest>() {
           @Override
           public void write(JsonWriter out, AssetsReturnsSimulationMonteCarloCornishFisherPostRequest value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public AssetsReturnsSimulationMonteCarloCornishFisherPostRequest read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

  /**
   * Create an instance of AssetsReturnsSimulationMonteCarloCornishFisherPostRequest given an JSON string
   *
   * @param jsonString JSON string
   * @return An instance of AssetsReturnsSimulationMonteCarloCornishFisherPostRequest
   * @throws IOException if the JSON string is invalid with respect to AssetsReturnsSimulationMonteCarloCornishFisherPostRequest
   */
  public static AssetsReturnsSimulationMonteCarloCornishFisherPostRequest fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, AssetsReturnsSimulationMonteCarloCornishFisherPostRequest.class);
  }

  /**
   * Convert an instance of AssetsReturnsSimulationMonteCarloCornishFisherPostRequest to an JSON string
   *
   * @return JSON string
   */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

