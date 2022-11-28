export var ConnectionTypeEnum;
(function (ConnectionTypeEnum) {
    ConnectionTypeEnum["Jdbc"] = "JDBC";
    ConnectionTypeEnum["Sftp"] = "SFTP";
    ConnectionTypeEnum["Mongodb"] = "MONGODB";
    ConnectionTypeEnum["Kafka"] = "KAFKA";
    ConnectionTypeEnum["Network"] = "NETWORK";
    ConnectionTypeEnum["Marketplace"] = "MARKETPLACE";
    ConnectionTypeEnum["Custom"] = "CUSTOM";
})(ConnectionTypeEnum || (ConnectionTypeEnum = {}));
